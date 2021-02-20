import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { EditFormationComponent } from './components/edit-formation/edit-formation.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { Routes, RouterModule } from '@angular/router'; 
import { CrudComponent } from './components/crud/crud.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { HomeComponent } from './components/home/home.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { AuthGuard } from 'src/app/auth.guard'; 
import { MessagesComponent } from './components/messages/messages.component'; 
import { CrudPartenairesComponent } from './components/crud-partenaires/crud-partenaires.component';
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
    { path: 'addFormation', component: CrudComponent }, 
    { path: 'users', component: ListUsersComponent },
    { path: 'editUser/:id', component: CrudUsersComponent },
    { path: 'listFormation', component: FormListComponent },
    { path: 'listPartenaires', component: CrudPartenairesComponent }, 
    {path: 'editFormation/:id', component: EditFormationComponent}, 
    { path : 'messages',component: MessagesComponent}
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
