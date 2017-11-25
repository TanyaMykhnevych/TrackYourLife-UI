import {
  IDonorMedicalExamListItemViewModel, IDonorRequestDetailsViewModel, IOrganInfoDetailedViewModel,
  IUserInfoDetailedViewModel
} from "../donorRequest/donorRequest.models";

export interface ICreatePatientRequestViewModel {
  email: string;
  firstName: string;
  secondName: string;
  birthDate: Date;
  phoneNumber: string;

  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  country: string;
  city: string;

  organInfoId: number;
  queryPriority: number;
  additionalInfo: string;
}


export interface IPatientRequestListItem {
  id: number;
  organInfoName: string;
  message: string;
  status: number; // PatientRequestStatuses
  patientInfoId: number;
  priority: number;
  organInfoId: number;
  hasLinkedDonorRequest: boolean;

}

export interface IPatientRequestList {
  patientRequestList: Array<IPatientRequestListItem>;
}


export interface IPatientRequestDetailsViewModel {
  id: number;
  message: string;
  status: number; // PatientRequestStatuses

  patientInfoId: number;
  patientInfo: IUserInfoDetailedViewModel;

  organInfoId: number;
  organInfo: IOrganInfoDetailedViewModel; // OrganInfo

  donorRequest: IDonorRequestDetailsViewModel;

  donorMedicalExams: Array<IDonorMedicalExamListItemViewModel>; // ICollection<DonorMedicalExam>
}
