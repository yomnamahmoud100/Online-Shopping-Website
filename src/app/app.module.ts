import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import { ReactiveFormsModule } from '@angular/forms';
import {TabMenuModule} from "primeng/tabmenu";
import { HeaderComponent } from './components/header/header.component';
import {SignupService} from "./services/signUp/signup.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./services/products/products.service";
import {LoginService} from "./services/loginService/login.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ButtonsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TabMenuModule,

  ],
  providers: [HttpClient,SignupService, ProductsService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
