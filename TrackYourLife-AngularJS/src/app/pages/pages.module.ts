import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "../login/login.component";
import {PagesComponent} from "./pages.component";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../common/core.module";
import {pagesRouting} from "./pages.routing";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    PagesComponent,

    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,

    pagesRouting
  ]
})
export class PagesModule {
}
