import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-loginfacebook',
  templateUrl: './loginfacebook.component.html',
  styleUrls: ['./loginfacebook.component.css']
})
export class LoginfacebookComponent implements OnInit {

  constructor(private autorizatioService:AuthorizationService) { }
  facebookLogin()
  {
    this.autorizatioService.facebookLogin();
    
  }

  // recordar poner el app id de facebook developer y app secret en firebase authentification method facebook.
  // Ver como crear api key, secure y poner el oath token q pide
  ngOnInit() {
  }

}
