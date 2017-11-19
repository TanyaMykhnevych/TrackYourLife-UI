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

export interface IDonorRequestListItem {
  id: number;
  organInfoName: string;
  message: string;
  status: number; // DonorRequestStatuses
  donorInfoId: number;

  organInfoId: number;
  hasLinkedPatientRequest: boolean;
  medicalExamsCount: number;

  lastMedicalExam: any; // DonorMedicalExam
}

export interface IDonorRequestList {
  donorRequestList: Array<IDonorRequestListItem>;
}
