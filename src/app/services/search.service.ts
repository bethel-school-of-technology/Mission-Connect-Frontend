import { Injectable } from '@angular/core';
import { Missionary } from '../models/missionary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private missionariesRoute = "http://localhost:3000/missionaries/get-missionaries";
  private searchRoute = "http://localhost:3000/missionaries/search-missionaries";
  private missionaryRoute = "http://localhost:3000/missionaries/"


  constructor(private http: HttpClient) {}
   
    getMissionaries(): Observable<Missionary[]>{
      return this.http.get<Missionary[]>(this.missionariesRoute);
      }
    searchMissionaries(name: string, continent: string, country: string): Observable<any>{
      return this.http.get<Missionary[]>(this.searchRoute+"?name="+name+
      "&continent="+continent+"&country="+country);
    }
    getMissionary(id: number): Observable<any>{
      return this.http.get<Missionary>(this.missionaryRoute + id);
    }
}
