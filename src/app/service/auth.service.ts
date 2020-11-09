import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authRoute = "http://localhost:3000/login"

  constructor( private http: HttpClient ) {}

  getUserDetails(Username: string, Password: string): Observable<any> {
    return this.http.post(this.authRoute, {Username, Password})
  }
}
