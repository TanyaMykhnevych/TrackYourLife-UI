import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-home-page',
  styleUrls: ['./home.scss'],
  templateUrl: './home.html'
})
export class HomeComponent {
  @ViewChild('loginForm') public loginForm: NgForm;

  public error: string;
  public $submitted = false;
  public entity = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {
  }
}
