import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { CategoriaComponent } from './producto/categoria/categoria.component';
import { InicioComponent } from './inicio/inicio.component';






const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: InicioComponent, data: { titulo: 'Inicio' } },
            { path: 'producto', component: ProductoComponent, data: { titulo: 'Productos' } },
            { path: 'productoCategoria', component: CategoriaComponent, data: { titulo: 'Categoría de Productos' } },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
