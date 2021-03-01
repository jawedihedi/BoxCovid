import { CreateRapportComponent } from './components/create-rapport/create-rapport.component';
import { CreateOrdannaceComponent } from './components/create-ordannace/create-ordannace.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './components/list-users/list-users.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { UserService } from './services/user.service';
import { AuthGuard } from 'src/app/auth.guard';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ChartModule} from 'primeng/chart';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistreMedComponent } from './components/registre-med/registre-med.component';
import { RegistrePatientComponent } from './components/registre-patient/registre-patient.component';
import { ListePatientComponent } from './components/liste-patient/liste-patient.component';
import { ProfilePatientComponent } from './components/profile-patient/profile-patient.component';

export function getToken() {
  return localStorage.getItem('token');
 }
const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: getToken
  }
};


@NgModule({
  declarations: [ListUsersComponent, HomeComponent, NavbarComponent, RegistreMedComponent, RegistrePatientComponent, ListePatientComponent, ProfilePatientComponent, CreateOrdannaceComponent, CreateRapportComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    InputTextareaModule,
    FormsModule,
    AccordionModule,
    CardModule,
    TabViewModule,
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    ListboxModule,
     Ng2SearchPipeModule,
     ChartModule,
     RadioButtonModule,
     ToggleButtonModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
    providers: [
    UserService,
    ConfirmationService,
    AuthGuard
   ],
})
export class AdminModule { }
