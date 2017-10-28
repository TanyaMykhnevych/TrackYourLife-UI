export let AppEnums = {

  routes: {
    login: 'login',
    pages: 'pages',
    tests: 'tests',
    history: 'history',
  },

  navigationParams: {
    clientId: {route: ':clientId', key: 'clientId'},
    historyId: {route: ':historyId', key: 'historyId'},
    testHistId: {route: ':testHistId', key: 'testHistId'},
    testResultId: {route: ':testResultId', key: 'testResultId'},
    employeeId: {route: ':employeeId', key: 'employeeId'},
    recurrentTestHistId: {route: ':recurrentTestHistId', key: 'recurrentTestHistId'},
    divisionId: {route: ':divisionId', key: 'divisionId'}
  },
  
  storageTypes: {
    sessionStorage: 'sessionStorage',
    localStorage: 'localStorage'
  },

  roles: {},

  claims: {
    MyDashboard: 10,
    Scheduling: 20,
    ScheduledTests: 30
  },

  examStatuses: {
    PreScheduled: 1,
    Scheduled: 2,
    PendingResults: 3,
  },

  recurrentTestHistState: {
    PreScheduled: 5,
    Scheduling: 10,
    HoldPendingEmployeeEmailing: 11
  },

  cancellationOrderStatuses: {
    unknown: 'Unknown',
    noCurrentIterations: 'NoCurrentIterations',
    currentIterationMustBeFinished: 'CurrentIterationMustBeFinished',
    currentIterationMayBeCanceled: 'CurrentIterationMayBeCanceled',
    canceled: 'Canceled',
  },

  alertType: {
    error: 'alert-error',
    success: 'alert-success',
    info: 'alert-info',
    fault: 'alert-fault',
    warning: 'alert-warning'
  },

  showMode: {
    edit: 'detail',
    create: 'create'
  }
};
