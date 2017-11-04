import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../../common/core.module";
import {homeRouting} from "./home.routing";
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,

    homeRouting
  ]
})
export class HomeModule {
}
