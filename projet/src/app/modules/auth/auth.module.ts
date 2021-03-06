import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module'; 
import { AuthService } from './auth.service';
import{ HttpClientModule} from '@angular/common/http';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt'; 
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message'; 
 

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: function  tokenGetter() {
        return     localStorage.getItem('token');} 
  }
};
@NgModule({
  declarations: [LoginComponent, RegisterComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    JwtModule.forRoot(JWT_Module_Options),
    ToastModule,
    MessagesModule,
    MessageModule
  ],
  providers:[
    MessageService,
    AuthService
  ]
})
export class AuthModule { }
