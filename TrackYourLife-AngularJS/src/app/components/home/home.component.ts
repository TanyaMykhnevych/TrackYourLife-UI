import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppEnums} from "../../app.constants";

// Do not forget to register Components in Declarations sections of App.module
@Component({
  selector: 'app-home-page',
  styleUrls: ['./home.scss'],
  templateUrl: './home.html'
})
export class HomeComponent {

  constructor(private router: Router) {
  }


  public goToCreateDonorRequestPage() {
    this.router.navigate(['/', AppEnums.routes.pages, AppEnums.routes.createDonorRequest]);
  }

}
