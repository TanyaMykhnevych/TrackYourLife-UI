import {IClaimModel} from "../../common/models/user-info";

export interface IUserInfo  {
  username: string;
  claims: Array<IClaimModel>;
}
