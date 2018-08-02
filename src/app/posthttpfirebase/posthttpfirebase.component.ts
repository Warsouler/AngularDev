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
    // this.verLugares();

   }

  guardarLugar()
  {
    this.lugar.id=Date.now();
    this.lugarService.guardarLugarHttp(this.lugar);
    alert("Negocio Guardado con éxito");
    // Limpiamos los campos
    this.lugar={};
  }

  ngOnInit() {
  }

}
