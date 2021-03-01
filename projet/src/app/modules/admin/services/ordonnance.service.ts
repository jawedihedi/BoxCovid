import { Ordonnance } from './../models/ordonnance';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  private REST_API="http://localhost:3000/Ordo";
  constructor(private http: HttpClient, private router: Router, private jwtHelperService: JwtHelperService) { }
  ajoutordonnance(data: Ordonnance, id ): Observable<any> {
    let API_URL = `${this.REST_API}/create/${id}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
