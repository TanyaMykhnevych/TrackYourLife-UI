import {Component} from '@angular/core';
import {Router} from "@angular/router";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-home-page',
  styleUrls: ['./home.scss'],
  templateUrl: './home.html'
})
export class HomeComponent {

  constructor(private router: Router) {
  }

}
