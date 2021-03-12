export const copy = {
  acceptInviteLogIn: "Please log in to accept this invite",
  acceptInviteSignUp: "Please sign up to accept this invitef",
  accountExists: "Already have an account?",
  accountNotExists: "No account yet?",
  add: "Add",
  addSlackChannel: "Add Slack channel",
  addTrigger: "Add trigger",
  aka: "A.K.A.",
  alertSlack: ({
    channel,
    team_name,
  }: {
    channel: string;
    team_name?: string | null;
  }): string => `Slack ${channel}${team_name ? ` in ${team_name}` : ""}`,
  alertTeam: "Alert your team",
  alertTeamDetail: "Receive email or Slack alerts with one click.",
  alerts: "Alerts",
  all: "All",
  allStatuses: "All statuses",
  allTests: "All tests",
  allTriggers: "All triggers",
  api: "API",
  apiDetail: "Trigger tests by calling the QA Wolf API:",
  apiKeyHere: "API KEY HERE",
  addToGroup: "Add to group",
  addToGroupDetail: "Tests can only belong to one group at a time",
  back: "Back",
  backToDashboard: "Back to dashboard",
  blog: "Blog",
  branches: "Branches",
  branchesDetail: "Which branches do you want to test?",
  branchesPlaceholder: "Example: develop,main",
  cancel: "Cancel",
  checkEmail: "Check your email for a code",
  chooseGitHubRepo: "Choose GitHub repository",
  choosePlan: "Choose plan",
  clickMe: "Click me",
  clickMeClicked: "Clicked!",
  close: "Close",
  code: "Code",
  codeLove: "Code you’ll 💖",
  codeLoveDetail:
    "Your test code uses the best selector and best-in-class open source tools.",
  communitySupport: "Community support",
  confirm: "Confirm",
  confirmDelete: (entity: string): string =>
    `Are you sure you want to delete the following ${entity}?`,
  connectToFailures: "Connect to failing tests",
  contactUs: "Contact us",
  continue: "Continue",
  copy: "Copy",
  copyFail: "Error :(",
  copySuccess: "Copied!",
  copyright: `QA Wolf, Inc. Copyright ${new Date().getFullYear()}`,
  create: "Create",
  createCode: "Create code",
  created: "Created",
  createFirstTest: "Create your first test",
  createOnline: "Create and run tests online",
  createTagline: "Create tests at warp speed",
  createTest: "Create test",
  createTrigger: "Create trigger",
  connectGitHubRepo: "Connect GitHub repository",
  curious: "Curious yet?",
  custom: "Custom",
  daily: "Daily",
  debugEasily: "Debug easily with a video and detailed logs",
  dedicatedSupport: "Dedicated support",
  delete: "Delete",
  deleted: "(Deleted)",
  deleteGroup: "Delete group",
  deleteOk: "Yes, delete",
  deleteTests: (count: number): string =>
    `Delete${count === 1 ? "" : ` ${count}`} test${count === 1 ? "" : "s"}`,
  deleteTestsDetail:
    "Are you sure? Deleting tests is permanent and cannot be undone",
  deleteTrigger: "Delete trigger",
  delightUsers: "Delight users",
  delightUsersDetail:
    "9/10 users form a bad opinion of your brand if your app does not work.",
  deployService: "Deploy service",
  deployment: "Deployment",
  deploymentsDetail: "Which deployments do you want to test?",
  discoverBugs:
    "Set up browser tests in minutes to discover bugs before your users do.",
  docs: "Docs",
  done: "Done",
  duration: "Duration",
  easyCi: "CI without a PhD",
  easyCiDetail:
    "Run tests in QA Wolf with one click, on every deployment, or in your own CI.",
  easyDebug: "Debugging made easy",
  easyDebugDetail:
    "Debug with video, logs, and the exact line a test failed on.",
  edit: "Edit",
  editTest: "Edit test",
  editTestsGroup: (count: number): string =>
    `Add ${count === 1 ? "" : `${count} tests `}to a group`,
  editTrigger: "Edit trigger",
  editTriggers: "Edit triggers",
  editTriggersDetail: "Choose which triggers you want to assign",
  editTriggersForTests: (count: number): string =>
    `Edit triggers${count === 1 ? "" : ` for ${count} tests`}`,
  email: "Email",
  emailPlaceholder: "you@awesome.com",
  emptyTestsSearch: "No tests found",
  encrypted: "Encrypted",
  enterUrl: "Enter your URL to create a test",
  envVariableDelete: "Delete environment variable",
  envVariableDeleteConfirm:
    "The following environment variable will be permanently deleted. Are you sure you want to continue?",
  envVariableNamePlaceholder: "MY_VAR",
  envVariableNew: "Create variable",
  envVariableValuePlaceholder: "value",
  envVariables: "Environment variables",
  envVariablesDetail:
    "Use environment variables for values that you don’t want visible in your code or to change the behavior of your test based on the environment",
  envVariablesEmpty: "No variables created for this environment",
  envVariablesNoEnvironment: "Please select an environment to see variables",
  environment: "Environment",
  environmentDelete: "Delete environment",
  environmentDeleteConfirm:
    "Are you sure? This will permanently delete all variables in this environment. Please type",
  environmentDeleteConfirm2: "to confirm.",
  environmentEdit: (name: string): string =>
    name ? `Edit ${name} environment` : "",
  environmentNew: "Create environment",
  environmentNotSelected: "No environment",
  environments: "Environments",
  frequency: "Frequency",
  frequencyDaily: "Every day",
  frequencyHourly: "Every hour",
  getInTouch: "Get in touch",
  getStarted: "Get started",
  gitHub: "GitHub",
  gitHubBranches: "GitHub branches",
  gitHubComplete: "🎉 All set! You can close this page.",
  gitHubRepo: "GitHub repository",
  goHome: "Go Home",
  group: "Group",
  groupDelete: "Delete group",
  groupDeleteConfirm:
    "Are you sure? This will permanently delete this group, but not the tests inside it",
  groupNew: "Create group",
  groups: "Test groups",
  growRevenue: "Grow revenue",
  growRevenueDetail:
    "2/3 of consumers abandon a purchase when they find a bug.",
  helpers: "Helpers",
  history: "History",
  hourly: "Hourly",
  iUnderstand: "I understand",
  inProgress: "In progress",
  invalidUrl: "Not a valid URL",
  invite: "Enter emails to invite",
  invitePlacholder: "name@company.com",
  joinMailingList: "Join our mailing list",
  joinSlack: "Join Slack",
  joinWolfPack: "Join the wolf pack",
  key: "Key",
  lastUsed: "Last used",
  learnedBasics: "Congratulations, you’ve mastered the basics of QA Wolf!",
  learnedBasics2:
    "Click the back arrow in the top left corner to return to the dashboard.",
  loading: "Loading...",
  logIn: "Log in",
  logInWithEmail: "Log in with email",
  logInWithGitHub: "Log in with GitHub",
  loginCodeSent: "Enter the 6-letter code we sent to ",
  logOut: "Log out",
  logs: "Logs",
  loveOpenSource: "We 💖 open source",
  mailingListSubscribe: "Receive product and company updates",
  manuallyTriggered: "Manually triggered",
  meet: "Meet your QA Wolf",
  members: "Members",
  mustMatch: "Must match",
  myTests: "My tests",
  name: "Name",
  nameWolf: "Name your wolf",
  nameWolfMaxLength: "Character limit reached",
  netlify: "Netlify",
  netlifyDeploy: "Your tests will run on Netlify deploy previews.",
  next: "Next",
  noEmail: "Please enter a valid email address",
  noGroup: "No group",
  noHistory: "No history yet",
  noMobile:
    "Woof. We're not mobile friendly yet. Please try again on a larger screen!",
  noRuns: "No runs",
  noPassword: "Please provide your password",
  noTrigger: "No trigger",
  none: "None",
  notFound: "(404. Page not found.)",
  notRunYet: "Not run yet",
  notStarted: "Preparing",
  onPremise: "Run on-premise",
  openSourceDiscount:
    "Ask us about our free or discounted plans for open source projects.",
  or: "or",
  password: "Password",
  pending: "Pending",
  perUserPerMonth: "/mo per user",
  placeholderInProgress: "Test in progress...",
  placeholderRunTest: 'Press the "Run test" button to run your test!',
  preview: "Preview",
  pricing: "Pricing",
  prioritySupport: "Priority support",
  production: "Production",
  qawolf: "QA Wolf",
  readDocs: "Read the docs",
  rename: "Rename",
  required: "Required",
  roadmap: "Roadmap",
  run: "Run",
  runHistory: "Run history",
  runOnDeployment: (repoName: string): string =>
    `Run on ${repoName} deployment`,
  runTagline: "Run tests without rocket science",
  runTest: "Run test",
  runTestIntro: (wolfName: string): string => `${wolfName} it is then!`,
  runTestIntro2:
    "As you use your site, test code is created on the left where it says",
  runTestIntro3:
    'Now run your test by clicking the "Run test" button or by pressing',
  runsFail: "Failing tests",
  runGroup: (count: number): string =>
    `Run ${count ? `${count} ` : ""}test${count === 1 ? "" : "s"}`,
  runsInProgress: "Running tests",
  runLines: (count: number): string =>
    `Run ${count} line${count === 1 ? "" : "s"}`,
  runsPass: "Passing tests",
  runSelectedCode:
    "You can run specific lines of code without re-running your entire test. This is helpful for adding assertions and editing your test.",
  runSelectedCode2:
    'Now highlight and run the last line of code, which will click the "Next" button.',
  runTests: (count: number, environment?: string | null): string =>
    `Run ${count} test${count === 1 ? "" : "s"}${
      environment ? ` on ${environment}` : ""
    }`,
  oneTeamMember: "1 team member",
  other: "Other",
  otherDeploy: "Don't see the tool you use? Let us know!",
  pleaseType: "Please type",
  tenTeamMembers: "Up to 10 team members",
  toggleCreateCode:
    'Click the "Create code" toggle above to turn off code creation. Then click the "Click me" button below.',
  toggleCreateCode2:
    "See how no code was created? You can turn off code creation to use your site without updating your test.",
  toggleCreateCode3:
    'Now turn code creation back on and click the "Next" button below.',
  save: "Save",
  saveTest: "Save Test",
  schedule: "Schedule",
  scheduleOnboarding: "Schedule onboarding",
  scheduleOneClick: "Schedule or run tests on deployments with one click",
  search: "Search",
  select: "Select",
  selected: (count: number): string => `${count} selected`,
  sendInvites: "Send invites",
  setEnvVariables: "Set environment variables",
  settings: "Settings",
  share: "Share run",
  shareFail: "Error copying",
  shareSuccess: "Copied link!",
  shipConfidently: "Ship confidently",
  ship: "Ship",
  shipFeatures: "Ship features, not bugs",
  shipFeaturesDetail: "It costs 5x as much to fix a bug after it is released.",
  shipTagline: "Launch your product to new heights",
  signUp: "Sign up",
  signUpWithEmail: "Sign up with email",
  signUpWithGitHub: "Sign up with GitHub",
  skipBoilerplate: "Skip writing boilerplate",
  skipBoilerplateDetail:
    "Create tests 10x faster by converting your actions to code.",
  somethingWrong: "Something went wrong",
  star: "Star",
  startTesting: "Start testing",
  startTestingFree: "Start testing for free",
  startTestingFreeDetail:
    "Ship confidently with the easiest way to set up browser tests.",
  startedAt: "Started",
  status: "Status",
  stopRunning: "Stop running",
  subscribe: "Subscribe",
  subscribeSuccess: "Thanks for subscribing 🎉",
  subjectToFairUse:
    "Each plan is subject to our fair use policy. Starter plans are limited to non-commercial use.",
  team: "Team",
  teamName: "Team name",
  teamNamePlaceholder: "My Team",
  teamSettings: "Team settings",
  terms: "Terms",
  testAcrossBrowsers: "Test in Chromium, Firefox, and WebKit",
  testCount: (count: number): string =>
    `${count} test${count === 1 ? "" : "s"}`,
  testFail: "Fail",
  testInProgress: "Running",
  testNamePlaceholder: "Name your test",
  testPass: "Pass",
  toastAutosave: "🐺 QA Wolf autosaves your tests",
  trigger: "Trigger",
  triggers: "Triggers",
  triggerDeleteConfirm:
    "Are you sure? This will permanently delete this trigger. Please type",
  triggerDeleteConfirm2: "to confirm.",
  triggersDetail:
    "Use triggers to run your tests on a schedule, on deployment, or with an API call",
  triggersEmpty: "No triggers created",
  triggerId: "trigger_id",
  triggerNamePlaceholder: "Name your trigger",
  tryForFree: "Try for free",
  urlPlaceholder: "https://myawesomesite.com",
  upgradePlan: "Upgrade plan",
  value: "Value",
  vercel: "Vercel",
  vercelDeploymentType: "Vercel deployment type",
  video: "Video",
  watchCreate: "Watch Jon create a test",
  watchTime: "in 1 minute",
  welcome: "Welcome to QA Wolf!",
  welcome2: "Sign up to create and run tests",
  wolfGreeting: (wolfName: string): string => {
    return `Hi, I'm ${wolfName}!`;
  },
  wolfIntro: "Nice to meet you, I'm your QA Wolf!",
  wolfIntro2: "I help you set up tests fast, so you can ship confidently.",
  wolfIntro3: "Let's start by giving me a name:",
  woof: "Woof.",
  woof2: "Woof woof woof.",
  zeroSetup: "Zero setup",
  zeroSetupDetail:
    "Create your first test in minutes - no installation or setup required.",
};
