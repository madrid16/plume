import {Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {PageNotFoundComponent} from "../pageNotFound/404";

export const APPROUTER:Routes = [
  {path: '', component: AppComponent},
  {path: '**', component: PageNotFoundComponent}
];
