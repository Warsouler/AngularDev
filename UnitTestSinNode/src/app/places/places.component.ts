import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  // como lo vamos a usar aca nomas ponemos los providers del servicio acá y no en el appmodule
  providers:[PlacesService]
})
// aca vamos a implementar servicios con testing
export class PlacesComponent implements OnInit {
  places=[
    // {id:1,name:'Platzi HQ'},
    // {id:2,name:'Zapateria el Clavo'}
  ]
  constructor(private placesServices:PlacesService) { 
      this.places=placesServices.getPlaces();
  }

  ngOnInit() {
  }

}
