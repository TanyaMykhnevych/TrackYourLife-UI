import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class PatientRequestsResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      // 'getAllClinics': 'clinics/getClinicById/{clinicId}'
    });
  }

  // public getAllClinics(): Promise<any> {
  //   const url = this.buildUrl(this.urlOptions['getAllClinics'], {});
  //   return this.http.get(url);
  // }
}
