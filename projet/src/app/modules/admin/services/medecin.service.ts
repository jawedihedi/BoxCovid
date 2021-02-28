import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private url="http://localhost:3000/api/auth"
  constructor(private http: HttpClient, private router: Router, private jwtHelperService: JwtHelperService) {}

  registerUser(user){
    return this.http.post<any>(`${this.url}/register`,user)
  }
  }
