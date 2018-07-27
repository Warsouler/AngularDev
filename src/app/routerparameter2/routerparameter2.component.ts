import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-routerparameter2',
  templateUrl: './routerparameter2.component.html',
  styleUrls: ['./routerparameter2.component.css']
})
export class Routerparameter2Component implements OnInit {

  lugares:any=[
    {id:1,plan: "pagado",cercania:1, distancia: 1,active:true, nombre:'Floreria la Gardania',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 1'},
    {id:2,plan: "gratuito",cercania:1, distancia: 1.8,active:false,nombre:'Donas la pasadita',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 2'},
    {id:3,plan: "gratuito",cercania:2, distancia: 5,active:true, nombre:'Veterinaria Huellitas Felices',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 3'},
    {id:4,plan: "pagado",cercania:3, distancia: 10,active:false, nombre:'Una cuarta',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 4'}
  ];

  myid:number=0;
  myref:string="";
  myaction:string="";

// declaramos una variable del tipo any osea cualquiera y la inicializamos vacia
lugar:any={};

  constructor(private route: ActivatedRoute) {
    //  En la variable route.snapshot.params['parametro'] se encuentra el valor
        this.myid=this.route.snapshot.params['id'];
        // en la variable queryparams son los parametros opcionales
        this.myref=this.route.snapshot.queryParams['referer'];
        this.myaction=this.route.snapshot.queryParams['action'];

        this.lugar=this.buscarLugar();

    }
    //declaramos una funcion que busque a través de la sentencia filter
    // los lugares que matcheen con una condición, ponemos el [0] porque
    // queremos que devuelva el primero, sino devuelve un array
    // es una buena práctica poner el || null porque sino puede romper
    buscarLugar(){
      return this.lugares.filter((lugar)=>{return lugar.id==this.myid})[0] || null;
    }
 
  ngOnInit() {
  }

}
