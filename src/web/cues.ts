import * as selectorEvaluatorSource from 'playwright-core/lib/generated/selectorEvaluatorSource';
import { isDynamic } from './isDynamic';

export const selectorSource = `new (${selectorEvaluatorSource.source})([])`;
const evaluator = eval((window as any).qawolf.selectorSource);

// TODO: incorporate logic from buildCssSelector
// for example: targeting checkbox/radio based on value,
// content editables

type Cue = {
  level: number; // 0 is target, 1 is parent, etc.
  type: 'attribute' | 'class' | 'id' | 'tag';
  value: string;
};

type Selector = {
  name: 'css' | 'text';
  body: string;
};

type BuildCues = {
  attributes: string[];
  target: HTMLElement;
};

type BuildCuesForElement = {
  attributes: string[];
  element: HTMLElement;
  level: number;
};

type IsMatch = {
  selector: Selector[];
  target: HTMLElement;
};

export const buildCues = ({ attributes, target }: BuildCues): Cue[] => {
  const cues: Cue[] = [];
  let element: HTMLElement = target;
  let level = 0;

  while (element) {
    cues.push(...buildCuesForElement({ attributes, element, level }));

    element = element.parentElement;
    level += 1;
  }

  return cues;
};

const buildCuesForElement = ({
  attributes,
  element,
  level,
}: BuildCuesForElement): Cue[] => {
  const cues: Cue[] = [];

  // TODO: handle regex attributes
  attributes.forEach((attribute) => {
    const value = element.getAttribute(attribute);
    if (!value) return;

    cues.push({ level, type: 'attribute', value: `[${attribute}="${value}"]` });
  });

  // TODO: add additional attributes like aria-label

  element.classList.forEach((c) => {
    if (isDynamic(c)) return;
    cues.push({ level, type: 'class', value: `.${c}` });
  });

  if (element.id && !isDynamic(element.id)) {
    cues.push({ level, type: 'id', value: `#${element.id}` });
  }

  cues.push({ level, type: 'tag', value: buildCueValueForTag(element) });

  return cues;
};

const buildCueValueForTag = (element: HTMLElement): string => {
  const tagName = element.tagName.toLowerCase();
  if (!element.parentElement) return tagName;

  const siblings = element.parentElement.children;
  const sameTagSiblings: HTMLElement[] = [];

  for (let sibling of siblings) {
    if (sibling.tagName.toLowerCase() === tagName) {
      sameTagSiblings.push(sibling as HTMLElement);
    }
  }

  if (sameTagSiblings.length < 2) {
    return tagName;
  }

  const nthIndex = sameTagSiblings.indexOf(element) + 1;

  return `${tagName}:nth-of-type(${nthIndex})`;
};

export const buildSelectorForCues = (cues: Cue[]): Selector[] => {
  const levels = [...new Set(cues.map((cue) => cue.level))];
  levels.sort().reverse();

  const selector: Selector[] = [];

  levels.forEach((level) => {
    const cuesForLevel = cues.filter((cue) => cue.level === level);
    cuesForLevel.sort((a, b) => {
      if (a.type === 'tag') return -1;
      if (b.type === 'tag') return 1;
      return 0;
    });

    const bodyValues = cuesForLevel.map((cue) => cue.value);

    selector.push({ name: 'css', body: bodyValues.join('') });
  });

  return selector;
};

export const isMatch = ({ selector, target }: IsMatch): boolean => {
  const result = evaluator.querySelectorAll(selector, document.body);
  if (result.length !== 1) return false;

  if (result[0] !== target) {
    throw new Error(`Selector ${selector} does not match target ${target}`);
  }

  return true;
};

export const toSelectorString = (selector: Selector[]): string => {
  const selectorNames = selector.map((s) => s.name);
  // pure CSS selector
  if (!selectorNames.includes('text')) {
    return selector.map((s) => s.body).join(' ');
  }

  // mixed selector
  return selector
    .map((s) => {
      if (s.name === 'css') {
        return `css=${s.body}`;
      }
      return `text="${s.body}"`;
    })
    .join(' >> ');
};
