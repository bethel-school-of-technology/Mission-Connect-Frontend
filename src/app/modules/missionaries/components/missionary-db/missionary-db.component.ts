import { Component, OnInit } from '@angular/core';
import { Missionary } from '../../../../models/missionary';
import { SearchService } from '../../../../service/search.service';


@Component({
  selector: 'app-missionary-db',
  templateUrl: './missionary-db.component.html',
  styleUrls: ['./missionary-db.component.css']
})
export class MissionaryDbComponent implements OnInit {

  missionaries: Missionary[];

 constructor(private searchService: SearchService) {}

  

  ngOnInit(): void {
    this.searchService.getMissionaries().subscribe(
      (missionaries) => this.missionaries = missionaries,
      (err) => console.log(err)
    );
  }

}
