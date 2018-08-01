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
    this.verLugares();

   }

  guardarLugar()
  {
    this.lugar.id=Date.now();
    this.lugarService.guardarLugar(this.lugar);
    alert("Negocio Guardado con éxito");
    // Limpiamos los campos
    this.lugar={};
  }

  // Creamos el array para mostrar el listado de la bd
  lugares=null;
  verLugares()
  {  
    // Asi va a tirar un error porque firebase nos devuelve un objeto pero no sabemos bien de que tipo si es object o object object
    // this.lugares=this.lugarService.getLugaresFire();

    // Nos tenemos que suscribir y ademas el valuchanges tiene un observable de lo que pasa en la bd y se sincronizan cuando hay cambios.
    this.lugarService.getLugaresFire().valueChanges().subscribe(lugares=>{
      this.lugares=lugares;
    }
  );

  // this.lugares=this.lugarService.getLugaresFire().valueChanges();

  }

  ngOnInit() {
  }

}
