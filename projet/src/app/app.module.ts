import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { ClientRoutingModule } from './modules/client/client-routing.module';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './Modules/auth/auth.module';
import { AuthGuard } from './auth.guard';
import { AdminModule } from './Modules/admin/admin.module';
import { ClientModule } from './Modules/client/client.module';
import { AuthService } from './Modules/auth/auth.service';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './token-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: function  tokenGetter() {
        return     localStorage.getItem('token');}
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    ClientRoutingModule,
    AdminRoutingModule,
    BrowserModule,
    HttpClientModule,
    AdminModule,
    ClientModule,
    AuthModule,
    AppRoutingModule,
    AdminRoutingModule, 
    JwtModule.forRoot(JWT_Module_Options), NgbModule
  ],
  providers: [
  AuthGuard,
  AuthService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true

  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
