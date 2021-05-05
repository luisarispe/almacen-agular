import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto/producto.component';
import { CategoriaComponent } from './producto/categoria/categoria.component';
import { InicioComponent } from './inicio/inicio.component';





@NgModule({
  declarations: [
    PagesComponent,
    ProductoComponent,
    CategoriaComponent,
    InicioComponent,
  ],
  exports: [
    PagesComponent,
    ProductoComponent,
    CategoriaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
