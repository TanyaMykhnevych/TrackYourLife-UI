

// Do not forget to register new @Injectable() in module 'Providers' section
import {Injectable} from "@angular/core";
import {ResourceBase} from "../../common/base/resourceBase";
import {HttpServiceWrapper} from "../../common/base/httpServiceWrapper";
import {SysConfig} from "../../../environments/sysConfig";

@Injectable()
export class OrganInfosResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getAllOrganInfos': 'organInfos/getAllOrganInfos'
    });
  }

  public getAllOrganInfos(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getAllOrganInfos'], {});
    return this.http.get(url);
  }
}
