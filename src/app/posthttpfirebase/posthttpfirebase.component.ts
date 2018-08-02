import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { LugareshttpService } from '../services/lugareshttp.service';

@Component({
  selector: 'app-posthttpfirebase',
  templateUrl: './posthttpfirebase.component.html',
  styleUrls: ['./posthttpfirebase.component.css']
})
export class PosthttpfirebaseComponent implements OnInit {
  lugar:any={};
  // Inyectamos el servicio
  constructor(private lugarService:LugareshttpService) {
    this.verLugares();

   }

  guardarLugar()
  {
    this.lugar.id=Date.now();
    this.lugarService.guardarLugarHttp(this.lugar);
    alert("Negocio Guardado con éxito");
    // Limpiamos los campos
    this.lugar={};
  }

  lugares=null;
  verLugares()
  {  
    // Vamos a ver que aparte de traer, si insertamos uno nuevo, al no usar sockets no actualiza la lista. Como hacia con firebase con socket.
      this.lugarService.buscarLugaresHttp().subscribe(lugares=>{
        // Ponemos .json() para que transforme eso en un objeto json de javascript
        this.lugares=lugares.json();
        // Usamos esto para que en el scope del map del array no nos tome el this del map sino el this del js
        var me =this;
        // Luego convertimos el json en un array
        this.lugares = Object.keys(this.lugares).map(function (key) { return me.lugares[key]; });
      }
    );
  }


  ngOnInit() {
  }

}
