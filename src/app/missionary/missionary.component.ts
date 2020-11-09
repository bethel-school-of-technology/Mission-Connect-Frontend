import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { SearchService } from '../services/search.service';
import { Missionary } from '../models/missionary';

@Component({
  selector: 'app-missionary',
  templateUrl: './missionary.component.html',
  styleUrls: ['./missionary.component.css']
})

export class MissionaryComponent implements OnInit {

  missionary: Missionary;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { }
  getMissionary(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.searchService.getMissionary(id).subscribe (missionary => {this.missionary = missionary.missionary;   console.log(missionary)});
    }
  ngOnInit(): void {
    this.getMissionary();
  }
  
}
