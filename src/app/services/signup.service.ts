import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Missionary } from '../models/missionary';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private missionaryRoute = "http://localhost:3000/missionaries/add"



  constructor(private http: HttpClient) { }

  addMissionary(newMissionary: Missionary): Observable<Missionary> {
    return this.http.post<Missionary>(this.missionaryRoute, newMissionary)
      
      
  };

};
