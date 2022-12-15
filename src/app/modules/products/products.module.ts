import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import {CardModule} from 'primeng/card';
import {SpeedDialModule} from "primeng/speeddial";
import {ButtonsModule} from "ngx-bootstrap/buttons";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CardModule,
    ProductsRoutingModule,
    SpeedDialModule
  ]
})
export class ProductsModule { }
