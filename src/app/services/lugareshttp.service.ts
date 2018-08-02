import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Http, Headers } from '../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LugareshttpService {

  //   Si queremos usar firebase
  constructor(private afdb:AngularFireDatabase,private http:Http) {
          
  }
  


// Aca arrancamos metodos http con firebase, osea sin usar sockets.
  API_ENDPOINT="https://platziangular-e62c4.firebaseio.com";
  public guardarLugarHttp(lugar)
  {
    debugger;
      const headers=new Headers({"Content-Type":"application/json"});
      return this.http.post(this.API_ENDPOINT+'/lugares.json',lugar,{headers:headers}).subscribe();
  }
}
