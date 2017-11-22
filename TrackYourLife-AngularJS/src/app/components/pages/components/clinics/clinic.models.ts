export interface IClinicListItem {
  id: number;
  name: string;
  contactPhone: string;
  addressLine1: string;
  country: string;
  city: string;
}

export interface IClinicList {
  clinics: Array<IClinicListItem>;
}

export interface IClinic {
  id: number;
  name: string;
  contactPhone: string;
  country: string;
  city: string;
  addressLine1: string;
  altitude: number;
  longitude: number;
}
