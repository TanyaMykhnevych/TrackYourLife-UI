import {EventEmitter, Injectable} from '@angular/core';
import {AuthResource} from "../resources/auth.resource";
import {AuthDataHolder} from "../../models/authDataHolder";
import {Route, Router} from "@angular/router";
import {AppEnums} from "../../app.constants";
import {UserService} from "./userService";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class AuthService {
  public onUserLogout = new EventEmitter<any>();

  constructor(private authResource: AuthResource,
              private router: Router,
              private userService: UserService) {
  }

  public toLoginPage() {
    this.router.navigate(['/', AppEnums.routes.login]);
    AuthDataHolder.accessToken = "";
  }

  acquireToken(params): Promise<any> {
    return this.authResource.acquireToken({
      username: params.username,
      password: params.password
    }).then(result => {
      AuthDataHolder.accessToken = result.accessToken;
      AuthDataHolder.tokenType = result.tokenType;
      AuthDataHolder.expiresIn = result.expiresIn;
      AuthDataHolder.when = new Date();

      return this.userService.updateUserInfo();
    }, err => {
      AuthDataHolder.errorMessage = err ? err : 'Not authorized';

      AuthDataHolder.accessToken = '';
      AuthDataHolder.tokenType = '';
      AuthDataHolder.expiresIn = 0;
      return Promise.reject(err);
    });
  }
}
