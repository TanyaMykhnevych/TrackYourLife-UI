

// Do not forget to register new @Injectable() in module 'Providers' section
import {Injectable} from "@angular/core";
import {ResourceBase} from "../../common/base/resourceBase";
import {HttpServiceWrapper} from "../../common/base/httpServiceWrapper";
import {SysConfig} from "../../../environments/sysConfig";

@Injectable()
export class PatientsQueueResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getPendingQueue': 'patientQueue/getPendingQueue',
      'getPendingQueueByOrgan': 'patientQueue/getPendingQueueByOrgan/{organInfoId}'
    });
  }

  public getPendingQueue(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getPendingQueue'], {});
    return this.http.get(url);
  }

  public getPendingQueueByOrgan(organInfoId: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getPendingQueueByOrgan'], {organInfoId: organInfoId});
    return this.http.get(url);
  }
}
