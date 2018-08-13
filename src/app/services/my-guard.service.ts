import { Injectable } from '@angular/core';
import { CanActivate } from '../../../node_modules/@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
// este servicio es un guardian, y nos servirá para ir mirando que nadie entre a ningun 
// lugar sin estar logueado
export class MyGuardService implements CanActivate {

  loggedIn=false;
  constructor(private authorizationService:AuthorizationService) {
    debugger;
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
  canActivate(){
    debugger;
    return this.loggedIn;
  }
}
