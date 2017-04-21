import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InitComponent} from "./init.component";
import {RouterModule} from "@angular/router";
import {APPROUTER} from "./commons/router";
import {PageNotFoundComponent} from "./pageNotFound/404";

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTER),
  ],
  providers: [],
  bootstrap: [InitComponent]
})
export class AppModule { }
