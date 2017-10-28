import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SysConfig} from '../environments/sysConfig';
import {StorageService} from "./common/services/storageService";
import {UserService} from "./common/services/userService";
import {AuthResource} from "./common/resources/auth.resource";
import {AccountResource} from "./common/resources/account.resource";
import {AuthService} from "./common/services/authService";
import {ActionNotifierComponent} from "./common/components/actionNotifier/actionNotifier";

@NgModule({
  declarations: [
    AppComponent,

    ActionNotifierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SysConfig,

    // Resources
    AuthResource,
    AccountResource,

    // Services
    StorageService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
