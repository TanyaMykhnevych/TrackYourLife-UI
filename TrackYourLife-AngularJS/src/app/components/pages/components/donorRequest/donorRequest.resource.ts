import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";
import {IScheduleMedicalExamViewModel} from "./donorRequest.models";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class DonorRequestResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'submitDonorRequest': 'donorRequests/createDonorRequest',
      'getDonorRequestList': 'donorRequests/getDonorRequestList',
      'getDonorRequestDetails': 'donorRequests/getDonorRequestDetails/{id}',
      'scheduleMedicalExam': 'donorRequests/scheduleMedicalExam'
    });
  }

  public submitDonorRequest(entity): Promise<any> {
    const url = this.buildUrl(this.urlOptions['submitDonorRequest'], {});
    return this.http.post(url, entity);
  }

  public getDonorRequestList(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getDonorRequestList'], {});
    return this.http.get(url);
  }

  public getDonorRequestDetails(donorRequestId: number): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getDonorRequestDetails'], {id: donorRequestId});
    return this.http.get(url);
  }

  public scheduleMedicalExam(entity: IScheduleMedicalExamViewModel): Promise<any> {
    const url = this.buildUrl(this.urlOptions['scheduleMedicalExam'], {});
    return this.http.post(url, entity);
  }
}
