import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  constructor( private auth: AuthService) {  }

  loginUser(e) {
    e.preventDefault();
    const target = e.target
    const Username =target.querySelector('#Username').value;
    const Password = target.querySelector('#Password').value;
    console.log(Username, Password)
    this.auth.getUserDetails(Username, Password);
    
  }
  ngOnInit(): void {
  }

}
 