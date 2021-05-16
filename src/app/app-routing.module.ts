import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { InicioComponent } from './modules/inicio/inicio.component';

import { ProductoComponent } from './modules/producto/producto/producto.component';
import { CategoriaComponent } from './modules/producto/categoria/categoria.component';
import { AuthRoutingModule } from './auth/auth.rounting';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [



  { path: '', canActivate: [AuthGuard], component: InicioComponent, data: { titulo: 'Inicio' } },
  { path: 'producto', canActivate: [AuthGuard], component: ProductoComponent, data: { titulo: 'Productos' } },
  { path: 'productoCategoria', canActivate: [AuthGuard], component: CategoriaComponent, data: { titulo: 'Categoría de Productos' } },
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
