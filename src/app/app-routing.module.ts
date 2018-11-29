import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeGuardGuard } from './core/guards/home-guard.guard';

const routes: Routes = [
  { path: '', loadChildren: './components/home/home.module#HomeModule', canActivate: [ HomeGuardGuard ]},
  { path: 'login', loadChildren: './components/login/login.module#LoginModule'},
  { path: 'register', loadChildren: './components/register/register.module#RegisterModule'},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
