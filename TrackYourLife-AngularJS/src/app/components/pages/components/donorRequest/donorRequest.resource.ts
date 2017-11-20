import {Injectable} from "@angular/core";
import {ResourceBase} from "../../../../common/base/resourceBase";
import {SysConfig} from "../../../../../environments/sysConfig";
import {HttpServiceWrapper} from "../../../../common/base/httpServiceWrapper";
import {IEnterMedicalExamResultViewModel, IScheduleMedicalExamViewModel, ISetRequestFinalStatusViewModel} from "./donorRequest.models";


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class DonorRequestResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'submitDonorRequest': 'donorRequests/createDonorRequest',
      'getDonorRequestList': 'donorRequests/getDonorRequestList',
      'getDonorRequestDetails': 'donorRequests/getDonorRequestDetails/{id}',
      'scheduleMedicalExam': 'donorRequests/scheduleMedicalExam',
      'submitMedicalExamResult': 'donorRequests/submitMedicalExamResult',
      'linkPatientRequest': 'donorRequests/linkPatientRequest',
      'scheduleOrganRetrieving': 'donorRequests/scheduleOrganRetrieving',
      'setRequestFinalStatus': 'donorRequests/setRequestFinalStatus',
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

  public submitMedicalExamResult(entity: IEnterMedicalExamResultViewModel): Promise<any> {
    const url = this.buildUrl(this.urlOptions['submitMedicalExamResult'], {});
    return this.http.post(url, entity);
  }

  public linkPatientRequest(entity: IEnterMedicalExamResultViewModel): Promise<any> {
    const url = this.buildUrl(this.urlOptions['linkPatientRequest'], {});
    return this.http.post(url, entity);
  }

  public scheduleOrganRetrievingTime(entity: IEnterMedicalExamResultViewModel): Promise<any> {
    const url = this.buildUrl(this.urlOptions['scheduleOrganRetrieving'], {});
    return this.http.post(url, entity);
  }

  public setRequestFinalStatus(entity: ISetRequestFinalStatusViewModel) : Promise<any> {
    const url = this.buildUrl(this.urlOptions['setRequestFinalStatus'], {});
    return this.http.post(url, entity);
  }
}
