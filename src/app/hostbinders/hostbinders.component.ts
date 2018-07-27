import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostbinders',
  templateUrl: './hostbinders.component.html',
  styleUrls: ['./hostbinders.component.css']
})
export class HostbindersComponent implements OnInit {
  lugares:any=[
    {plan: "pagado",cercania:1, distancia: 1,active:true, nombre:'Floreria la Gardania'},
    {plan: "gratuito",cercania:1, distancia: 1.8,active:false,nombre:'Donas la pasadita'},
    {plan: "gratuito",cercania:2, distancia: 5,active:true, nombre:'Veterinaria Huellitas Felices'},
    {plan: "pagado",cercania:3, distancia: 10,active:false, nombre:'Una cuarta'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
