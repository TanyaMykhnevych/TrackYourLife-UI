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
import {AuthDataHolder} from "../../models/authDataHolder";
import {Router} from "@angular/router";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class UserService {
  public onUserChanged = new EventEmitter<any>();
  public userInfo: IUserInfo;


  constructor(private accountResource: AccountResource) {
  }

  isAuthenticated() {
    return AuthDataHolder.isAuthenticated;
  }

  getUserInfo(): IUserInfo {
    return this.userInfo;
  }

  updateUserInfo(): Promise<any> {
    return this.accountResource.getUserInfo().then(result => {
      const data = result.json();
      console.log(data);
      if (!this.userInfo || this.userInfo.username !== data.content.username) {
        this.onUserChanged.emit(data.content);
      }
      this.userInfo = data.content;
      return result;
    });
  }
}
