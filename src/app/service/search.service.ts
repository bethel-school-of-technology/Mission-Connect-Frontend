import { Injectable } from '@angular/core';
import { Missionary } from '../models/missionary';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private missionariesRoute = "http://localhost:3000/missionaries/get-missionaries";
  private searchRoute = "http://localhost:3000/missionaries/search-missionaries";


  constructor(private http: HttpClient) {}
   
    getMissionaries(): Observable<Missionary[]>{
      return this.http.get<Missionary[]>(this.missionariesRoute);
      }
    searchMissionaries(): Observable<Missionary[]>{
      return this.http.get<Missionary[]>(this.searchRoute);
    }
}
