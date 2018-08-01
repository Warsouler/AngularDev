import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routerparameter',
  templateUrl: './routerparameter.component.html',
  styleUrls: ['./routerparameter.component.css']
})
export class RouterparameterComponent implements OnInit {
  // La ruta debe estar preparada para mostrar un id
  lugares:any=[
    {id:1,plan: "pagado",cercania:1, distancia: 1,active:true, nombre:'Floreria la Gardania'},
    {id:2,plan: "gratuito",cercania:1, distancia: 1.8,active:false,nombre:'Donas la pasadita'},
    {id:3,plan: "gratuito",cercania:2, distancia: 5,active:true, nombre:'Veterinaria Huellitas Felices'},
    {id:4,plan: "pagado",cercania:3, distancia: 10,active:false, nombre:'Una cuarta'}
  ];
  // En el constructor le inyectamos el ActivatedRoute que de ahi 
  // tomamos el parametro
 constructor(private route: ActivatedRoute) {
  //  En la variable route.snapshot.params['parametro'] se encuentra el valor
  alert(this.route.snapshot.params['id']);

  }

  ngOnInit() {
  }

}
