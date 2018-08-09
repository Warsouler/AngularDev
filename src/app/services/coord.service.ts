import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CoordService {

  
  constructor(private http:Http) { 


  }

  obtenerGeoData(direccion)
  {
    // https://maps.googleapis.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+direccion);
  }

  
}
