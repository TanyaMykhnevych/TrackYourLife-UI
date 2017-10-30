import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../common/services/authService";
import {AppEnums} from "../app.constants";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.scss'],
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') public loginForm: NgForm;

  public error: string;
  public $submitted = false;
  public entity = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private authService: AuthService) {
  }


  public ngOnInit() {
    this.error = 'You do not have enough permissions to access Track Your Life';
  }

  public signIn(): Promise<any> {
    this.$submitted = true;

    if (!this.loginForm.valid) {
      return;
    }

    return this.authService.acquireToken({
      username: this.entity.username,
      password: this.entity.password
    }).then(() => {
      this.router.navigate(['/', AppEnums.routes.pages]);
    }, (err) => {
      alert('invalid username or password');
      console.error(err);
    });
  }

  public signOut() {
    this.authService.toLoginPage();
  }

}
