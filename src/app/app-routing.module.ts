import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AuthRoutingModule } from './auth/auth.rounting';
import { PagesRoutingModule } from './modules/pages.routing';

const routes: Routes = [


  //path:'/auth' AuthRouting
  { path: '', redirectTo: '', pathMatch: 'full' },

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
    PagesRoutingModule
  ]
})
export class AppRoutingModule { }
