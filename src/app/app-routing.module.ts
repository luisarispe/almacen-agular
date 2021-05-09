import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { InicioComponent } from './modules/inicio/inicio.component';

import { ProductoComponent } from './modules/producto/producto/producto.component';
import { CategoriaComponent } from './modules/producto/categoria/categoria.component';
import { AuthRoutingModule } from './auth/auth.rounting';

const routes: Routes = [



  { path: '', component: InicioComponent, data: { titulo: 'Inicio' } },
  { path: 'producto', component: ProductoComponent, data: { titulo: 'Productos' } },
  { path: 'productoCategoria', component: CategoriaComponent, data: { titulo: 'Categoría de Productos' } },
  { path: '**', component: NopagefoundComponent, data: { titulo: 'Error 404' } },

];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ]
})
export class AppRoutingModule { }
