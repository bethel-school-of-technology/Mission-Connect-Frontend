import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Missionary } from '../../../../models/missionary';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private resultsRoute = "http://localhost:3000/missionaries/search-results";
  public missionaries: Missionary[];

  constructor(private http: HttpClient) { }

  getMissionaries() {
    this.http.get<Missionary[]>(this.resultsRoute).subscribe(missionaries => {
      this.missionaries = missionaries;
    })
  }

  ngOnInit(): void {
    this.getMissionaries();
  }

}
