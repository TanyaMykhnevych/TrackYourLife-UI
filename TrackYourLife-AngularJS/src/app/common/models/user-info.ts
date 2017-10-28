export interface IClaimModel {
  id: number;
  name: string;
  description: string;
  type: number;
}


export interface IUserInfo {
  objectId: string;
  roleName: string;
  claims: Array<IClaimModel>;
}
