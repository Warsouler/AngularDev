import { Component, OnInit } from '@angular/core';
import { CoordService } from '../services/coord.service';

@Component({
  selector: 'app-coords',
  templateUrl: './coords.component.html',
  styleUrls: ['./coords.component.css']
})
export class CoordsComponent implements OnInit {

  lugar:any={};
  constructor(private coordService:CoordService) { }

  ngOnInit() {
  }

  guardarCoords()
  {
    var direccion=this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    


    this.coordService.obtenerGeoData(direccion).subscribe((result)=>{
        this.lugar.lat=result.json().results[0].geometry.location.lat;
        this.lugar.lng=result.json().results[0].geometry.location.lng;
        alert(this.lugar.lat + " "+ this.lugar.lng)
        // luego podemos guardarlo en firebase

    })
  }

}
