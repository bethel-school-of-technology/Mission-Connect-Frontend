import { Component, OnInit } from '@angular/core';
import { Missionary } from '../models/missionary';

import { MissionaryService } from '../services/missionary.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  missionaries: Missionary[];

  constructor(private missionaryService: MissionaryService) {
    this.missionaries = missionaryService.missionaries;
   }

  ngOnInit(): void {
  }

}
