import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {ButtonsModule} from "ngx-bootstrap/buttons";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
