import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ListUsersComponent } from './components/list-users/list-users.component';



const routes: Routes = [
  {
  path : 'admin',
  component : NavbarComponent,
  canActivate : [AuthGuard],
  canActivateChild :[AuthGuard],

  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
    },
    { path: 'users', component: ListUsersComponent },
    { path: 'editUser/:id', component: CrudUsersComponent },
   ]
  }
];


@NgModule({
  declarations: [],

  imports: [
    RouterModule.forChild(routes) ,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
