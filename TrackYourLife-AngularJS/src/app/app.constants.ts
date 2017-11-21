export let AppEnums = {

  routes: {
    pages: 'pages',
    login: 'login',
    home: 'home',
    clinics: 'clinics',
    manageOrganInfos: 'manageOrganInfos',
    manage: 'manage',
    list: 'list',
    details: 'details',
    donorRequest: 'donorRequest',
    create: 'create',
    requestSent: 'requestSent',
    patientRequest: 'patientRequest'
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

  patientQueryPriority: {
    low: 100,
    normal: 200,
    high: 300,
    urgent: 400
  },

  patientQueryPriorityStrings: {
    '100': "Low",
    '200': "Normal",
    '300': "High",
    '400': "Urgent"
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
  },

  donorRequestStatuses: {
    pendingMedicalExamination: 100,
    scheduledMedicalExamination: 200,
    failedMedicalExamination: 300,
    awaitingForPatientRequest: 350,
    needToScheduleTimeForOrganRetrieving: 400,
    awaitingOrganRetrieving: 500,
    finishedSuccessfully: 600,
    finishedFailed: 700
  },

  donorRequestStatusesStrings: {
    '100': "Pending Medical Examination",
    '200': "Scheduled Medical Examination",
    '300': "Failed Medical Examination",
    '400': "Need To Schedule Time For Organ Retrieving",
    '500': "Awaiting Organ Retrieving",
    '600': "Finished Successfully",
    '700': "Finished Failed"
  },

  medicalExamStatuses: {
    scheduled: 1000,
    pass: 2000,
    fail: 3000
  },

  medicalExamStatusesStrings: {
    '1000': "Scheduled",
    '2000': "Pass",
    '3000': "Fail"
  },

  patientRequestStatusesStrings: {
    '100': "Awaiting For Donor",
    '200': "Awaiting For Transplanting",
    '300': "Finished Successfully"
  }

};
