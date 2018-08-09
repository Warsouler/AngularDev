import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // declaramos un objeto
  registro:any={};
  constructor(private authorizationService:AuthorizationService) {
    // this.authorizationService.register('email','password');

   }
  //  y en el registro usamos two data binding
   register()
   {
    this.authorizationService.register(this.registro.email,this.registro.password);
   }
  ngOnInit() {
  }

}
