import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductoComponent } from './producto.component';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
    {
        path: 'producto',
        component: PagesComponent,
        children: [
            { path: '', component: ProductoComponent },

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductoRoutingModule { }
