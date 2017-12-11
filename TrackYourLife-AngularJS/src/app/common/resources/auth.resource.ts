import {Injectable} from "@angular/core";
import {ResourceBase} from "../base/resourceBase";
import {SysConfig} from "../../../environments/sysConfig";
import {HttpServiceWrapper} from "../base/httpServiceWrapper";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class AuthResource extends ResourceBase {

  constructor(config: SysConfig, http: HttpServiceWrapper) {
    super(config, http, {
      'acquireToken': 'token'
    });
  }

  acquireToken(data): Promise<any> {
    const url = this.buildUrl(this.urlOptions['acquireToken'], {});
    return this.http.post(url, data, {noIntercept: true});
  }
}
