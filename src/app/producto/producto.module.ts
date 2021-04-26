import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';



@NgModule({
  declarations: [
    ProductoComponent
  ],
  exports: [
    ProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { }
