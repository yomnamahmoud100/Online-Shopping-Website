import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {SpeedDialModule} from "primeng/speeddial";
import {AlertModule} from "ngx-bootstrap/alert";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    CardModule,
    ButtonModule,
    SpeedDialModule,
    AlertModule,
    MessageModule,
    MessagesModule,
    FormsModule
  ]
})
export class ShoppingCartModule { }
