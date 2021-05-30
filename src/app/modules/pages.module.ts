import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './producto/producto/producto.component';
import { CategoriaComponent } from './producto/categoria/categoria.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';





@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent,
    InicioComponent,
    PerfilComponent,
    UsuarioComponent,
  ],
  exports: [

    ProductoComponent,
    CategoriaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
