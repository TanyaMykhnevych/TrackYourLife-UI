export interface ICreateDonorRequestViewModel {
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  birthDate: Date;

  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  country: string;
  city: string;

  phoneNumber: string;

  message: string;

  organInfoId: number;
}

export interface IDonorRequestDetailsViewModel {
  id: number;
  message: string;
  status: number; // DonorRequestStatuses
  donorInfoId: number;
  donorInfo: any;

  organInfoId: number;
  organInfo: any; // OrganInfo

  transplantOrganId: number;
  transplantOrgan: any; // TransplantOrgan

  patientOrganQuery: any; // PatientOrganQuery

  donorMedicalExams: Array<IDonorMedicalExamListItemViewModel>; // ICollection<DonorMedicalExam>
}


export interface IDonorRequestListItem {
  id: number;
  organInfoName: string;
  message: string;
  status: number; // DonorRequestStatuses
  donorInfoId: number;

  organInfoId: number;
  hasLinkedPatientRequest: boolean;
  medicalExamsCount: number;

  lastMedicalExam: IDonorMedicalExamListItemViewModel; // DonorMedicalExam
}

export interface IDonorRequestList {
  donorRequestList: Array<IDonorRequestListItem>;
}

export interface IScheduleMedicalExamViewModel {
  donorRequestId: number;
  clinicId: number;
  scheduledDateTime: Date;
}

export interface IDonorMedicalExamListItemViewModel {
  id: number;
  scheduledAt: Date;
  clinicId: number;
  status: number; // MedicalExamStatuses
  results: string;
  donorOrganQueryId: number;
}
