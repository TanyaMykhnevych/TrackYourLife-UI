import {Injectable} from '@angular/core';
import {EventEmitter} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {IUserInfo} from "../../models/interfaces/IUserInfo";
import {StorageService} from "./storageService";
import {AccountResource} from "../resources/account.resource";
import {IContentResponseWrapper} from "../../models/interfaces/apiRespone/responseWrapper";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class UserService {
  public onUserChanged = new EventEmitter<any>();
  public userInfo: IUserInfo;

  constructor(private accountResource: AccountResource,
              private storageService: StorageService) {
    this.userInfo = this.storageService.get('userInfo');
  }

  isAuthenticated() {
    return !!this.storageService.get('userInfo');
  }

  public getUserInfo(): IUserInfo {
    return this.userInfo;
  }

  public updateUserInfo(): Promise<any> {
    return this.accountResource.getUserInfo().then((result: IContentResponseWrapper<IUserInfo>) => {
      console.log(result);
      this.updateUserInfoStorage(result);
      if (result.isValid) {
        this.userInfo = result.content;
        this.onUserChanged.emit(this.userInfo);
      }
      return result;
    });
  }

  private updateUserInfoStorage(response: IContentResponseWrapper<IUserInfo>) {
    if (response.isValid) {
      this.storageService.set('userInfo', response.content);
    } else {
      this.clearUserInfo();
    }
  }

  public clearUserInfo() {
    this.storageService.remove('userInfo');
  }
}
