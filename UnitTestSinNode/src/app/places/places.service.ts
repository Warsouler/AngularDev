import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  places=[
    {id:1,name:'Platzi HQ'},
    {id:2,name:'Zapateria el Clavo'}
  ]
  constructor() { }

  getPlaces(){
    return this.places;
  }
}
