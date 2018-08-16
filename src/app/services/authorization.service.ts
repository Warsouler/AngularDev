import { Injectable } from '@angular/core';
import { EmailValidator } from '../../../node_modules/@angular/forms';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private angularFireAuth:AngularFireAuth) 
  { 


  }

  // Esta es otra forma de declarar una funcion usando la notacion de typescript
  // para el login recordarse de ir a las reglas del firebase y cambiar read y write por auth != null
  // cambiamos
  //  .read": true,
  //   ".write": true
  // por
  //   ".read": "auth =!null",
    // ".write": "auth =!null"
  public login=(email,password) => {
    // this.angularFireAuth.auth.setPersistence("local").then(function() {
    //   this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then((response)=>{
    //     // alert("Usuario logueado correctamente");
    //     var user = this.angularFireAuth.auth.currentUser;
    //     console.log(user.displayName);
    //     console.log(user.email);
    // console.log(user.photoURL);
    // console.log(user.emailVerified);
    //   console.log(user.uid);
    //     console.log(response);
  
    //     console.log(user.getIdToken(true));
    //   })
    //   .catch((error)=>{
    //     alert("Ha ocurrido un error");
    //     console.log(error);
    //   })
      
    // })
    // .catch(function(error) {
    //   // Handle Errors here.
    //   debugger;
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(error);
    // });
    debugger;
    this.angularFireAuth.auth.setPersistence("local");

    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then((response)=>{
      // alert("Usuario logueado correctamente");
      var user = this.angularFireAuth.auth.currentUser;
      console.log(user.displayName);
      console.log(user.email);
  console.log(user.photoURL);
  console.log(user.emailVerified);
    console.log(user.uid);
      console.log(response);

      console.log(user.getIdToken(true));
    })
    .catch((error)=>{
      alert("Ha ocurrido un error");
      console.log(error);
    })
  }
  // recordar ir a firebase y habilitar desde Authentification, el proveedor de acceso de correo y contraseña
  public register=(email,password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password).then((response)=>{
      alert("Usuario registrado correctamente");
      // una vez creado automaticamente angular con la funcion de arriba nos guarda el token en el localstorage
    })
    .catch((error)=>{
      alert("Ha ocurrido un error");
      console.log(error);
    })
  }
}
