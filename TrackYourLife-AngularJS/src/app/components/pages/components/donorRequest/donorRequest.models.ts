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
