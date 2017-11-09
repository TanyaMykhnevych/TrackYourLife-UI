export interface IOrganInfoListItem {
  id: number;
  name: string;
  contactPhone: string;
  country: string;
  city: string;
}

export interface IOrganInfoList {
  organInfoList: Array<IOrganInfoListItem>;
}

export interface IOrganInfo {
  id: number;
  name: string;
  description: string;
  outsideHumanPossibleTime: string;
}
