import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  lugar:any={};
  // Inyectamos el servicio
  constructor(private lugarService:LugaresService) {
 

   }

  guardarLugar()
  {
    console.log(this.lugar);
    this.lugarService.guardarLugar(this.lugar);
  }

  ngOnInit() {
  }

}
