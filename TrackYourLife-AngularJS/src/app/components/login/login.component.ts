import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../common/services/authService";
import {IContentResponseWrapper} from "../../models/interfaces/apiRespone/responseWrapper";
import {AppEnums} from "../../app.constants";
import {PreloaderService} from "../../common/services/preloaderService";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.scss'],
  templateUrl: './login.html'
})
export class LoginComponent {
  @ViewChild('loginForm') public loginForm: NgForm;

  public loginErrorMessage: string;
  public $submitted = false;

  public routes = AppEnums.routes;

  public entity = {
    rememberMe: false,
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private preloaderService: PreloaderService,
              private authService: AuthService) {
  }

  public signIn(): Promise<any> {
    this.$submitted = true;

    if (!this.loginForm.valid) {
      return;
    }

    this.preloaderService.showGlobalPreloader();
    return this.authService.acquireToken({
      username: this.entity.username,
      password: this.entity.password
    }).then((result: IContentResponseWrapper<any>) => {
      this.preloaderService.hideGlobalPreloader();
      if (!result.isValid) {
        this.loginErrorMessage = result.errorMessage;
      } else {
        this.fillUserData(result.content);
        this.router.navigate(['/', AppEnums.routes.pages]);
      }
    }, (response) => {
      this.preloaderService.hideGlobalPreloader();

      if (response.status === 401) {
        this.loginErrorMessage = 'Wrong username or password.';
      } else {
        this.loginErrorMessage = 'Unknown error occured. See console for details.';
      }
      console.error(response);
    }).catch(() => {
      this.preloaderService.hideGlobalPreloader();
    });
  }

  private fillUserData(userData: any) {

  }

  public signOut() {
    this.authService.toLoginPage();
  }

}
