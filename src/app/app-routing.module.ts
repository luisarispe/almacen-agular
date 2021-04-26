import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { AuthRoutingModule } from './auth/auth.rounting';
import { PagesRoutingModule } from './pages/pages.routing';
import { ProductoRoutingModule } from './producto/producto.routing';

const routes: Routes = [


  //path:'/auth' AuthRouting
  //path: '/pages' PagesRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
    ProductoRoutingModule
  ]
})
export class AppRoutingModule { }
