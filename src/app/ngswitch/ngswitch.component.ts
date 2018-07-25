import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  lugares:any=[
    {cercania:1, distancia: 1,active:true, nombre:'Floreria la Gardania'},
    {cercania:1, distancia: 1.8,active:false,nombre:'Donas la pasadita'},
    {cercania:2, distancia: 5,active:true, nombre:'Veterinaria Huellitas Felices'},
    {cercania:3, distancia: 10,active:false, nombre:'Una cuarta'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
