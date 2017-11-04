export let AppEnums = {

  routes: {
    pages: 'pages',
    login: 'login',
    home: 'home',
    clinics: 'clinics',
    manage: 'manage',
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

  roles: {
    admin: 'Administrator',
    donor: 'Donor',
    patient: 'Patient',
    medicalEmployee: 'MedicalEmployee'
  },

  claims: {
    viewDonorRequestList: 100,
    viewDonorRequest: 200,
    editDonorRequest: 300,
    changeDonorRequestStatus: 400,

    viewOrganRequestList: 500,
    viewOrganRequest: 600,
    editOrganRequest: 700,
    createOrganRequest: 800,

    connectDonorAndOrganRequests: 1000,

    addNewOrgan: 1500,
    addNewMedicalEmployee: 1600,

    addOrganInfo: 2000,
    registerNewPatient: 2100,
    addClinic: 2200,

    viewOrganTransportData: 2500
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
