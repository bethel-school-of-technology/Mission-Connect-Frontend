import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Missionary } from '../../../../models/missionary';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  missionaries: Missionary[];
  name: string;
  continent: string;
  country: string;
  private missionariesRoute = "http://localhost:3000/search-missionaries"
  searchParams;
  constructor(private route: ActivatedRoute, private search: SearchService, private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.name = params ['name'];
      this.continent = params ['continent'];
      this.country = params ['country']
    })
  }

  searchMissionaries(): void {
    const name = (this.name);
    const continent = (this.continent);
    const country =(this.country);
    this.search.searchMissionaries(name, continent, country).subscribe(missionaries => this.missionaries = missionaries);
  }

  ngOnInit(): void {
    this.searchMissionaries();
  }    
}

