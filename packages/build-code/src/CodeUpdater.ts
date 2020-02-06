import { buildWorkflow } from "@qawolf/build-workflow";
import { logger } from "@qawolf/logger";
import { ElementEvent, Step, Workflow } from "@qawolf/types";
import { sortBy } from "lodash";
import { buildStepsCode } from "./buildStepsCode";
import { getIndentation, indent, removeLinesIncluding } from "./format";

export const CREATE_CODE_SYMBOL = "// 🐺 CREATE CODE HERE";

type ConstructorOptions = {
  device?: string;
  isTest?: boolean;
  name: string;
  url: string;
};

type PrepareStepsOptions = {
  newEvents?: ElementEvent[];
  onlyFinalSteps?: boolean;
};

export class CodeUpdater {
  private _events: ElementEvent[] = [];
  private _options: ConstructorOptions;

  private _pendingStepIndex: number = 0;
  public _steps: Step[] = [];

  constructor(options: ConstructorOptions) {
    this._options = options;
  }

  public static hasCreateSymbol(code: string) {
    return code.includes(CREATE_CODE_SYMBOL);
  }

  private _buildWorkflow(onlyFinalSteps?: boolean) {
    const workflow = buildWorkflow({
      device: this._options.device,
      events: this.getEvents(),
      onlyFinalSteps,
      name: this._options.name,
      url: this._options.url
    });

    return workflow;
  }

  public getEvents() {
    return sortBy(this._events, e => e.time);
  }

  public getNumPendingSteps() {
    return this._steps.length - this._pendingStepIndex;
  }

  public prepareSteps(options: PrepareStepsOptions): Workflow {
    if (options.newEvents) {
      this._events.push(...options.newEvents);
    }

    const workflow = this._buildWorkflow(options.onlyFinalSteps);

    const newSteps = workflow.steps.slice(this._steps.length);

    newSteps.forEach(step => {
      logger.debug(`CodeUpdater: new step ${step.action}`);
      this._steps.push(step);
    });

    return workflow;
  }

  public updateCode(code: string, isLastUpdate: boolean = false): string {
    if (!CodeUpdater.hasCreateSymbol(code)) {
      throw new Error("Cannot update code without create symbol");
    }

    if (!isLastUpdate && this.getNumPendingSteps() < 1) {
      throw new Error("No code to update");
    }

    const startIndex = this._pendingStepIndex;

    // move the pending step forward
    this._pendingStepIndex = this._steps.length;

    let codeToInsert =
      buildStepsCode({
        startIndex,
        steps: this._steps,
        isTest: this._options.isTest
      }) + CREATE_CODE_SYMBOL;

    const numSpaces = getIndentation(code, CREATE_CODE_SYMBOL);

    let updatedCode = code.replace(
      CREATE_CODE_SYMBOL,
      indent(codeToInsert, numSpaces, 1)
    );

    if (isLastUpdate) {
      updatedCode = removeLinesIncluding(updatedCode, CREATE_CODE_SYMBOL);
    }

    return updatedCode;
  }
}
