import {Injectable} from '@angular/core';
import {EventEmitter} from "@angular/core"
import 'rxjs/add/operator/toPromise';
import {Http, RequestOptions, Headers} from "@angular/http";
import {AppEnums} from "../../app.constants";
import {SysConfig} from "../../../environments/sysConfig";
import {IUserInfo} from "../../models/interfaces/IUserInfo";
import {StorageService} from "./storageService";
import {AuthService} from "./authService";
import {AccountResource} from "../resources/account.resource";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class UserService {
  public onUserLogout = new EventEmitter<any>();
  public onUserChanged = new EventEmitter<any>();
  public userInfo: IUserInfo;


  constructor(private storageService: StorageService,
              private authService: AuthService,
              private accountResource: AccountResource,
              private sysConfig: SysConfig,
              private http: Http) {
  }

  toLoginPage() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.OAuthData
      && this.authService.OAuthData.isAuthenticated
      && this.authService.OAuthData.accessToken;
  }

  get() {
    return this.authService.OAuthData;
  }

  getUserInfo(): IUserInfo {
    return this.userInfo;
  }

  updateUserInfo(token: string): Promise<any> {
    return this.accountResource.getUserInfo().then(result => {
        const data = result.json();
        console.log(data);
        this.userInfo = data.content;
        return result;
      });
  }

}
