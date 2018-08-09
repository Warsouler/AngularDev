import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logins:any={};
  constructor(private authorizationService:AuthorizationService) {
   }

  ngOnInit() {
  }
  login()
  {
    // debugger;
    this.authorizationService.login(this.logins.email,this.logins.password);
  }

}
