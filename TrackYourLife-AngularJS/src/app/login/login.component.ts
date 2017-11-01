import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../common/services/authService";
import {AppEnums} from "../app.constants";
import {IContentResponseWrapper} from "../models/interfaces/apiRespone/responseWrapper";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.scss'],
  templateUrl: './login.html'
})
export class LoginComponent {
  @ViewChild('loginForm') public loginForm: NgForm;

  public $submitted = false;
  public entity = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private authService: AuthService) {
  }

  public signIn(): Promise<any> {
    this.$submitted = true;

    if (!this.loginForm.valid) {
      return;
    }

    return this.authService.acquireToken({
      username: this.entity.username,
      password: this.entity.password
    }).then((result: IContentResponseWrapper<any>) => {
      if (!result.isValid) {
        alert('You entered wrong username or password');
      } else {
        this.fillUserData(result.content);
        this.router.navigate(['/', AppEnums.routes.pages]);
      }
    }, (err) => {
      alert('Some error occured. See console for details.');
      console.error(err);
    });
  }

  private fillUserData(userData: any) {

  }

  public signOut() {
    this.authService.toLoginPage();
  }

}
