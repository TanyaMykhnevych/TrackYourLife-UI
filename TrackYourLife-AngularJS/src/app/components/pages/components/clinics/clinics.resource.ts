import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class ClinicsResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getAllClinics': 'clinics/getClinics',
      'getClinicById': 'clinics/getClinicById/{id}',
      'post': 'clinics/addClinic',
      'put': 'clinics/editClinic'
    });
  }

  public getAllClinics(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getAllClinics'], {});
    return this.http.get(url);
  }

  public getClinicById(id: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getClinicById'], {id});
    return this.http.get(url);
  }
}
