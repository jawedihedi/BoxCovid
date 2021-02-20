import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router'; 
import { NavbarComponent } from './navbar/navbar.component';
import { FormulaireformationComponent } from './formulaireformation/formulaireformation.component';
import { HomeComponent } from './home/home.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component'; 
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {
    path : '',
    component : NavbarComponent,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path :'home' , component : HomeComponent},
  
      { path: 'list',
           component: ListeFormationsComponent
      } ,
      { path: 'espacePersonnel',
           component: ProfilComponent
      } ,
      { path: 'list/:id',
           component: FormationDetailsComponent
      } 
      
    ]
  }, 
      { path: 'formulaires',
          component: FormulaireformationComponent
      } 
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
