

// Do not forget to register new @Injectable() in module 'Providers' section
import {Injectable} from "@angular/core";
import {ResourceBase} from "../../common/base/resourceBase";
import {HttpServiceWrapper} from "../../common/base/httpServiceWrapper";
import {SysConfig} from "../../../environments/sysConfig";

@Injectable()
export class OrganInfosResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getAllOrganInfos': 'organInfos/getAllOrganInfos',
      'GetOrganInfoList': 'organInfos/getOrganInfoList',
      'getOrganInfoById': 'organInfos/GetOrganInfoById/{id}',
      'post': 'organInfos/AddOrganInfo',
      'put': 'organInfos/EditOrganInfo'
    });
  }

  public getAllOrganInfos(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getAllOrganInfos'], {});
    return this.http.get(url);
  }

  public getOrganInfoList(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['GetOrganInfoList'], {});
    return this.http.get(url);
  }

  public getOrganInfoById(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getOrganInfoById'], {id});
    return this.http.get(url);
  }
}
