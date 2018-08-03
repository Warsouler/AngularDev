import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Http,Headers } from '../../../node_modules/@angular/http';
import { TemplateBindingParseResult } from '../../../node_modules/@angular/compiler';
// Como no vamos a importar un componente sino una operación especifica usamos este tipo de import
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaptypeserviceService {

  //   Si queremos usar firebase
  constructor(private afdb:AngularFireDatabase,private http:Http) { 
  }
  


  API_ENDPOINT="https://platziangular-e62c4.firebaseio.com";
  public buscarLugaresHttpMap()
  {
    // aqui devolvemos en vez de un resultado de una tabla podemos devolver toda la info y mapearla
    // para esto usamos que traiga cualquier json, despues usamos un pipe que dentro usamos la funcion map
    // tomamos una proyección anonima declaramos la constante data y mapeando el resultado lo hacemos json
    // y de este solo queremos retornar los lugares
    return this.http.get(this.API_ENDPOINT+'/.json').pipe(map((resultado)=>{
      const data= resultado.json().lugares;
      return data;
    }))
      
  }

  public buscarLugaresHttpMapError()
  {
    // aqui devolvemos en vez de un resultado de una tabla podemos devolver toda la info y mapearla
    // para esto usamos que traiga cualquier json, despues usamos un pipe que dentro usamos la funcion map
    // tomamos una proyección anonima declaramos la constante data y mapeando el resultado lo hacemos json
    // y de este solo queremos retornar los lugares
    return this.http.get(this.API_ENDPOINT+'/.js').pipe(map((resultado)=>{
      const data= resultado.json().lugares;
      return data;
    }))
      
  }
}
