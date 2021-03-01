import { CreateOrdannaceComponent } from './components/create-ordannace/create-ordannace.component';
import { CreateRapportComponent } from './components/create-rapport/create-rapport.component';
import { OrdonnanceComponent } from './../client/ordonnance/ordonnance.component';
import { ProfilePatientComponent } from './components/profile-patient/profile-patient.component';
import { ListePatientComponent } from './components/liste-patient/liste-patient.component';
import { RegistrePatientComponent } from './components/registre-patient/registre-patient.component';
import { RegistreMedComponent } from './components/registre-med/registre-med.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { profile } from 'console';



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
    { path: 'med/ajout',
      component: RegistreMedComponent
    },
    { path: 'patient/ajout',
      component: RegistrePatientComponent
    },
    { path: 'patient/etats/:id',
      component: ProfilePatientComponent
    },
    { path: 'patient/ajoutOrdo/:id',
      component: CreateOrdannaceComponent
    },
    { path: 'patient/ajoutRap/:id',
      component: CreateRapportComponent
    },
    { path: 'patients', component: ListePatientComponent },
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
