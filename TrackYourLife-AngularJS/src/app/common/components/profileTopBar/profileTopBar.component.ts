import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../../services/userService";
import {AuthService} from "../../services/authService";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-profile-top-bar',
  styleUrls: ['./profileTopBar.scss'],
  templateUrl: './profileTopBar.html',
  encapsulation: ViewEncapsulation.None
})
export class ProfileTopBarComponent implements OnDestroy {
  public user: any;
  private userChanged;

  constructor(private userService: UserService,
              private authService: AuthService) {

    this.user = this.userService.getUserInfo();
    this.userChanged = this.userService.onUserChanged.subscribe((user) => {
      this.user = user;
    });
  }

  public logout() {
    this.authService.toLoginPage();
  }

  public ngOnDestroy() {
    this.userChanged.unsubscribe();
  }
}
