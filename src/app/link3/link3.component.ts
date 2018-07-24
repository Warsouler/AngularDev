import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link3',
  templateUrl: './link3.component.html',
  styleUrls: ['./link3.component.css']
})
export class Link3Component implements OnInit {
  //string interpolation
  myvar = 'probando string interpolation2';
  a=3;
  b=5;
  //Declaracion de tipo es de forma opcional.
  nombre:string="";
  nombre2:string="";
  
  //property binding
  listo=false;

  // Probando en el constructor property binding con segundos de espera
  constructor() { 
    setTimeout(() => {this.listo=true},3000)
  }
// Event binding
  hacerAlgo(){
    alert("Estoy haciendo algo");
  }

  ngOnInit() {
  }

}
