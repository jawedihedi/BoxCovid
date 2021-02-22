import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {
    path : '',
    component : NavbarComponent,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path :'home' , component : HomeComponent},
      { path: 'espacePersonnel',
           component: ProfilComponent
      } ,
      {
        path: 'about',
        component: AboutUsComponent
      }

    ]
  },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
