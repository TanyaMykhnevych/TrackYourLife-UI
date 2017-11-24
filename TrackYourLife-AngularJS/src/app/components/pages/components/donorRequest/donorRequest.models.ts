import {Span} from "@angular/compiler-cli";
import {IClinicListItem} from "../clinics/clinic.models";
import {IPatientRequestDetailsViewModel} from "../patientRequest/patientRequest.models";

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

  lastMedicalExam: IDonorMedicalExamListItemViewModel; // DonorMedicalExam
}

export interface IDonorRequestList {
  donorRequestList: Array<IDonorRequestListItem>;
}

export interface IDonorRequestDetailsViewModel {
  id: number;
  message: string;
  status: number; // DonorRequestStatuses

  donorInfoId: number;
  donorInfo: IUserInfoDetailedViewModel;

  organInfoId: number;
  organInfo: IOrganInfoDetailedViewModel; // OrganInfo

  transplantOrganId: number;

  medicalExamsCount: number;

  patientRequest: IPatientRequestDetailsViewModel;

  lastDonorMedicalExam: IDonorMedicalExamListItemViewModel; // ICollection<DonorMedicalExam>
  medicalExamClinic: IClinicListItem; // ICollection<DonorMedicalExam>
}

export interface IUserInfoDetailedViewModel {
  id: number;
  appUserId: string;
  email: string;

  firstName: string;
  secondName: string;
  birthDate: Date;

  notes: string;

  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  country: string;
  city: string;

  phoneNumber: string;
}

export interface IOrganInfoDetailedViewModel {
  id: number;
  name: string;
  description: string;
  outsideHumanPossibleTime: Date;
}


// Modals models

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
  donorRequestId: number;
}

export interface IEnterMedicalExamResultViewModel {
  donorRequestId: number;
  medicalExamStatus: number; // MedicalExamStatuses
  medicalExamResults: string;
}

export interface ILinkPatientRequestViewModel {
  donorRequestId: number;
  patientRequestId: number;
}

export interface IScheduleOrganRetrievingViewModel {
  donorRequestId: number;
}

export interface ISetRequestFinalStatusViewModel {
  donorRequestId: number;
  donorRequestStatus: number;
}

export interface IEnterMedicalExamResultViewModel {
  donorRequestId: number;
}

export interface ILinkPatientRequestViewModel {
  donorRequestId: number;
}

export interface IScheduleOrganRetrievingViewModel {
  donorRequestId: number;
}

export  interface  ISetRequestFinalStatusViewModel {
  donorRequestId: number;
}
