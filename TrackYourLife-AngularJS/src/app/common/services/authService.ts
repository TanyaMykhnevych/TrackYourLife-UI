import {EventEmitter, Injectable} from '@angular/core';
import {AuthResource} from "../resources/auth.resource";
import {Route, Router} from "@angular/router";
import {AppEnums} from "../../app.constants";
import {UserService} from "./userService";
import {IContentResponseWrapper} from "../../models/interfaces/apiRespone/responseWrapper";
import {IUserInfo} from "../../models/interfaces/IUserInfo";
import {StorageService} from "./storageService";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class AuthService {
  public onUserLogout = new EventEmitter<any>();

  constructor(private authResource: AuthResource,
              private router: Router,
              private storageService: StorageService,
              private userService: UserService) {
  }

  public toLoginPage() {
    this.onUserLogout.emit();
    this.updateAuthData({});
    this.userService.clearUserInfo();
    this.router.navigate(['/', AppEnums.routes.login]);
  }

  public acquireToken(params): Promise<any> {
    return this.authResource.acquireToken({
      username: params.username,
      password: params.password
    }).then(result => {
      this.updateAuthData(result);

      return this.userService.updateUserInfo();
    }, err => {
      this.updateAuthData({});
      return Promise.reject(err);
    });
  }

  private updateAuthData(result: any) {
    if (result.accessToken) {
      this.storageService.set('accessToken', result.accessToken);
      this.storageService.set('tokenType', result.tokenType);
      this.storageService.set('expiresIn', result.expiresIn);
      this.storageService.set('when', new Date());
    } else {
      this.storageService.remove('accessToken');
      this.storageService.remove('tokenType');
      this.storageService.remove('expiresIn');
    }
  }
}
