import {Routes, RouterModule} from '@angular/router';
import {AppEnums} from "../../app.constants";
import {HomeComponent} from "./home.component";


const r = AppEnums.routes;
const routes: Routes = [
  {path: r.home, component: HomeComponent}
];

export const homeRouting = RouterModule.forChild(routes);
