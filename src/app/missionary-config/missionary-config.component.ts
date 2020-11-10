import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SignupService } from '../services/signup.service';
import { Missionary } from '../models/missionary';

@Component({
  selector: 'app-missionary-config',
  templateUrl: './missionary-config.component.html',
  styleUrls: ['./missionary-config.component.css']
}) 
export class MissionaryConfigComponent implements OnInit {
  
  newMissionary: Missionary = new Missionary();

  constructor(private router : Router,
    private signupService: SignupService) { }

  
  ngOnInit(): void {
    
  }
  addNew(){
this.signupService  .addMissionary(this.newMissionary).subscribe(response => {console.log(response);  
     this.router.navigate(["database"]);
   })
 }
 }
