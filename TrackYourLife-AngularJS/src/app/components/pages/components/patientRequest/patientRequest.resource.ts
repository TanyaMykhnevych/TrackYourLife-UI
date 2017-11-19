import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class PatientRequestResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'submitPatientRequest': 'patientRequest/createPatientRequest',
      'getPatientRequestList': 'patientRequest/getPatientRequestList'
    });
  }

  public submitPatientRequest(entity): Promise<any> {
    const url = this.buildUrl(this.urlOptions['submitPatientRequest'], {});
    return this.http.post(url, entity);
  }

  public getPatientRequestList(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getPatientRequestList'], {});
    return this.http.get(url);
  }
}
