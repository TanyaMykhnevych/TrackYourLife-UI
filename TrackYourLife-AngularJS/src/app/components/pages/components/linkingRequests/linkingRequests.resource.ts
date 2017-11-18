import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class LinkingRequestsResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'submitLinkingRequests': 'linkingRequests/linkRequests'
    });
  }

  public submitDonorRequest(entity): Promise<any> {
      const url = this.buildUrl(this.urlOptions['submitLinkingRequests'], {});
      return this.http.post(url, entity);
  }
}
