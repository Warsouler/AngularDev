import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-pathauth',
  templateUrl: './pathauth.component.html',
  styleUrls: ['./pathauth.component.css']
})
export class PathauthComponent implements OnInit {
  loggedIn=false;

  constructor(private authorizationService:AuthorizationService) {
    // vamos al authorization service y nos sucribimos para ver si está logueado, sino por seguridad le ponemos false
    // y si si, vemos si viene algun resultado y si viene es que está logueado.
    this.authorizationService.isLogged().subscribe((result)=>
    {
      if (result && result.uid)
      {
        this.loggedIn=true;
      }
      else
      {
        this.loggedIn=false;
      }
      
    }, 
    (error)=>
    {
      this.loggedIn=false;
    }
  
  
    );
   }
   logout(){
     this.authorizationService.logout();
   }

  ngOnInit() {
  }

}
