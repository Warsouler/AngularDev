import { Component, OnInit } from '@angular/core';
import { MaptypeserviceService } from '../services/maptypeservice.service';

@Component({
  selector: 'app-maptypesc',
  templateUrl: './maptypesc.component.html',
  styleUrls: ['./maptypesc.component.css']
})
export class MaptypescComponent implements OnInit {

  constructor(private lugarService:MaptypeserviceService) {
    this.verLugares();

   }
   lugares=null;
  verLugares()
  {  
      this.lugarService.buscarLugaresHttpMap().subscribe(lugares=>{
        // Como el servicio ya mapeo la consulta y nos devuelve el json no hace falta el lugares.json()
        this.lugares=lugares;
        var me =this;
        this.lugares = Object.keys(this.lugares).map(function (key) { return me.lugares[key]; });
      }
    );
  }

  ngOnInit() {
  }

}
