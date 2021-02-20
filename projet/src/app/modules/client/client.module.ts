import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { FormationsComponent } from './formations/formations.component';
import { FormulaireformationComponent } from './formulaireformation/formulaireformation.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { MessageComponent } from './message/message.component';
import { SliderComponent } from './slider/slider.component';
import { ClientRoutingModule } from './client-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { NavbarService } from './service/navbar.service';  
import {AccordionModule} from 'primeng/accordion'; 
import {TabViewModule} from 'primeng/tabview';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';
import { MessageService } from 'primeng/api';   
import {ChipsModule} from 'primeng/chips'; 
import {InputMaskModule} from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast'; 
import { UserService } from '../admin/services/user.service';
import { AuthService } from '../auth/auth.service';  


@NgModule({
  declarations: [ NavbarComponent, SliderComponent, FormationsComponent,FormulaireformationComponent, HomeComponent, FooterComponent, ListeFormationsComponent, FormationDetailsComponent, MessageComponent,ProfilComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    HttpClientModule, 
    AccordionModule,
    TabViewModule,
    NgbModule,
    PaginatorModule,
    FileUploadModule,
    ChipsModule,
    InputMaskModule,
    ToastModule, 
  ] ,
  exports : [  
  ],
  providers :[ 
    NavbarService,
    MessageService,
    UserService,
    AuthService 
  ]
})
export class ClientModule { }
