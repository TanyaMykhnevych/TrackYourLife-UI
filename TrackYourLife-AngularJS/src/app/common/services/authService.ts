import {Injectable} from '@angular/core';
import {AuthResource} from "../resources/auth.resource";
import {AuthDataHolder} from "../../models/authDataHolder";

// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class AuthService {

  constructor(private authResource: AuthResource) {
  }

  login() {

  }

  logout() {
    // TODO: clear auth data
    // TODO: go to login page
  }

  // getUser(): Promise<AuthUser> {
  //   // TODO: retrive user
  // }

  acquireToken(params): Promise<any> {
    return this.authResource.acquireToken({
      username: params.username,
      password: params.password
    }).then(result => {
      AuthDataHolder.accessToken = result.accessToken;
      AuthDataHolder.tokenType = result.tokenType;
      AuthDataHolder.expiresIn = result.expiresIn;
    }, err => {
      AuthDataHolder.errorMessage = err ? err : 'Not authorized';

      AuthDataHolder.accessToken = '';
      AuthDataHolder.tokenType = '';
      AuthDataHolder.expiresIn = 0;
    });
  }
}
