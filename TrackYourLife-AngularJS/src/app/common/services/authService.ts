import {Injectable} from '@angular/core';
import {AuthResource} from "../resources/auth.resource";

export interface AuthUser {
  userName: string;
  accessToken: string;
}


// Do not forget to register new @Injectable() in module 'Providers' section
@Injectable()
export class AuthService {
  public OAuthData = {
    accessToken: '',
    tokenType: '',
    expiresIn: 0,
    isAuthenticated: false,
    errorMessage: ''
  };

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
      this.OAuthData.accessToken = result.accessToken;
      this.OAuthData.tokenType = result.tokenType;
      this.OAuthData.expiresIn = result.expiresIn;
      this.OAuthData.isAuthenticated = true;
    }, err => {
      this.OAuthData.isAuthenticated = false;
      this.OAuthData.errorMessage = err;

      this.OAuthData.accessToken = '';
      this.OAuthData.tokenType = '';
      this.OAuthData.expiresIn = 0;
    });
  }
}
