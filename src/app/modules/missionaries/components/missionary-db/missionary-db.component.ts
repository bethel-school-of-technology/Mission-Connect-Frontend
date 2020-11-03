import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Missionary } from '../../../../models/missionary';


@Component({
  selector: 'app-missionary-db',
  templateUrl: './missionary-db.component.html',
  styleUrls: ['./missionary-db.component.css']
})
export class MissionaryDbComponent implements OnInit {

  private missionariesRoute = "http://localhost:3000/missionaries/get-missionaries";
  public missionaries: Missionary[];

  constructor(private http: HttpClient) {}

  getMissionaries() {
    this.http.get<Missionary[]>(this.missionariesRoute).subscribe(missionaries => {
      this.missionaries = missionaries;
    })
  }

  ngOnInit(): void {
    this.getMissionaries();
  }

}
