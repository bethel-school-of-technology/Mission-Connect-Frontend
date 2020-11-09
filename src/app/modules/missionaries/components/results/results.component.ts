import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../service/search.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  missionary: string;
  missionaries;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  searchMissionaries() {
    this.searchService.searchMissionaries()
    .subscribe(missionaries => 
      this.missionaries = missionaries
    );
  }

  ngOnInit(): void {
     
  }

}
