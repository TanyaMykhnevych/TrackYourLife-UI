import {Injectable} from "@angular/core";
import {ResourceBase} from "../base/resourceBase";
import {SysConfig} from "../../../environments/sysConfig";
import {HttpServiceWrapper} from "../base/httpServiceWrapper";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class AccountResource extends ResourceBase  {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'getUserInfo': 'account/getUserInfo'
    });
  }

  getUserInfo(): Promise<any> {
    const url = this.buildUrl(this.urlOptions['getUserInfo'], {});
    return this.http.get(url);
  }
}
