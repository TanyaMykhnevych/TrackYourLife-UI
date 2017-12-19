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

  alertType: {
    error: 'alert-error',
    success: 'alert-success',
    info: 'alert-info',
    fault: 'alert-fault',
    warning: 'alert-warning'
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
    '350': "Awaiting For Patient Request",
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

  patientRequestStatuses: {
    awaitingForDonor: 100,
    awaitingForTransplanting: 200,
    finishedSuccessfully: 300,
    finishedFailed: 400
  },

  patientRequestStatusesStrings: {
    '100': "Awaiting For Donor",
    '200': "Awaiting For Transplanting",
    '300': "Finished Successfully",
    '400': 'Finished Failed'
  }

};
