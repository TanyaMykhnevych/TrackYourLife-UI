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
