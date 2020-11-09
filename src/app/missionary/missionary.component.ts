import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { SearchService } from '../service/search.service';
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

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.searchService.getMissionary(id);
  }

}
