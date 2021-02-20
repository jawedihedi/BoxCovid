import { Injectable, Injector } from '@angular/core';
import { AuthService } from './Modules/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(private injector : Injector) { }
  intercept(req,next){
    let authService = this.injector.get(AuthService)
    if(authService.isLoggedIn()){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${authService.getJwtToken()}`
      }
    })
    return next.handle(tokenizedReq);
   }
   return next.handle(req);
  }
}
