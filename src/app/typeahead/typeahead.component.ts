import { Component, OnInit } from '@angular/core';
import { CoordService } from '../services/coord.service';
import { FormControl } from '../../../node_modules/@angular/forms';
import { Observable, observable } from '../../../node_modules/rxjs';
import { Http } from '../../../node_modules/@angular/http';
import { debounceTime, switchMap, map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {

  lugar:any={};
  // creamos un input de search, pero como podriamos trabajar en backend tb con esta variable la hacemos FormControl
  private searchField: FormControl;
  // declaramos un observable con el signo de $ solo por convención como tipo observable
  results$:Observable<any>;

  
  constructor(private coordService:CoordService,private http:Http) {
    const URL='https://maps.google.com/maps/api/geocode/json';
    // const URL='https://maps.googleapis.com/maps/api/place/textsearch/json?query=macys';
    this.searchField = new FormControl();
    // Aqui asignamos a nuestro observable que cuando cambie lo que se tipea en el searchfield 
    // este observable capte ese evento.
    this.results$=this.searchField.valueChanges.pipe(
      
      // tomamos 500 milisegundos de espera
      debounceTime(500)
      // la forma de poner get es entre dos apóstrofes simples es para concatenar mejor los strings
      ,switchMap(query => this.http.get(`${URL}?address=${query}`))
      // aca para formatear la respuesta como siempre
      ,map(response=>response.json().results)
      // ,map(response=>response.results)
    );
    console.log(this.results$);
    // this.results$.subscribe();
    // // la forma de poner get es entre dos apóstrofes simples es para concatenar mejor los strings
    // .switchMap(query => this.http.get(`{URL}?address=${query}`))
    // // aca para formatear la respuesta como siempre
    // .map(response=>response.json())
    // .map(response=>response.results);

  
    


   }

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
