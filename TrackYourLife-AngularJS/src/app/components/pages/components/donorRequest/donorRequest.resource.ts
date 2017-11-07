import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class DonorRequestResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'submitDonorRequest': 'donorRequests/createDonorRequest'
    });
  }

  public submitDonorRequest(entity): Promise<any> {
      const url = this.buildUrl(this.urlOptions['submitDonorRequest'], {});
      return this.http.post(url, entity);
  }
}
