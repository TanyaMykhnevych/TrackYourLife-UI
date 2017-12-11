import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {loginRouting} from "./login.routing";
import {LoginComponent} from "./login.component";
import {CoreModule} from "../../common/core.module";

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
