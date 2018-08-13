import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-updatelugares',
  templateUrl: './updatelugares.component.html',
  styleUrls: ['./updatelugares.component.css']
})
export class UpdatelugaresComponent implements OnInit {

  

  ngOnInit() {
  }

  lugar:any={};
  myid:number=0;
  constructor(private route: ActivatedRoute,private lugarService:LugaresService) {
        this.myid=this.route.snapshot.params['id'];
        // Nos suscribimos, si tira error es porque nos estamos suscribiendo a una referencia asi que tenemos q poner que se suscriba a un objeto que se cambia en el service.
       this.lugar= this.lugarService.buscarLugar(this.myid).valueChanges().subscribe((lugar)=> {this.lugar=lugar});

        // this.lugar=this.lugarService.getLugares().;

    }

    public modificarLugar()
    {
      this.lugarService.modificarLugar(this.lugar);
      alert("Lugar modificado con éxito");
    }
    

}
