import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../common/core.module";
import {loginRouting} from "./login.routing";
import {LoginComponent} from "./login.component";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,

    loginRouting
  ]
})
export class LoginModule {
}
