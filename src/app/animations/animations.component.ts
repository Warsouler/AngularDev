import { Component, OnInit } from '@angular/core';
// importamos los disparadores estados y estilos y si vamos a usar transiciones, transiciones y animaciones.
import {trigger,state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  // aca es donde declaramos las animaciones
  animations:[
    // Los trigger o disparadores son las directivas que dicen que Función se va a ejecutar, y dentro se declaran
    // los distintos estados que puede pasar ese evento, esto se declara con un arreglo de estados donde
    // se le da un nombre y un estilo
        trigger('ContenedorAnimable', [
          // cuando usamos propiedades de estilo aca son con camelCase ej: backgroundColor.
          state('inicial',style({
            opacity:0.2,
            backgroundColor:'green',
            transform:'rotate3d(0,0,0,0deg)'
          })),
          state('final',style({
            opacity:1,
            backgroundColor:'yellow',
            transform:'rotate3d(5,10,20,30deg)'
          })),
          // solo si queremos usar transiciones
          // aca decimos que si cambiamos de una transición inicial a 
          // una final cambiando su estilo lo haga en 1000 ms osea 1 segundo .
          transition('inicial => final',animate(1000)),
          // aca alrrevez pero más rápido
          transition('final => inicial',animate(300))
        ])
  ]
})
export class AnimationsComponent implements OnInit {
 state:string="inicial";
 state2:string="final";
 state3:string="inicial";
  constructor() { }

  ngOnInit() {
  }
// declaramos la funcion animar
  animar(){
    this.state3=(this.state3==='final')?'inicial':'final';
  }

}
