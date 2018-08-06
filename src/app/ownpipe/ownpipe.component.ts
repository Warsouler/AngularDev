import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownpipe',
  templateUrl: './ownpipe.component.html',
  styleUrls: ['./ownpipe.component.css']
})
export class OwnpipeComponent implements OnInit {

  lugares:any=[
    {nombre:'Floreria la Gardania',descripcion:'Descripción 1'},
    {nombre:'Donas la pasadita',descripcion:'Esta es una super descripción pruebala en www.google.com  o sino a http://yahoo.com y no te arrepentiras!!!!'},
    {nombre:'Veterinaria Huellitas Felices',descripcion:'Descripción 3'},
    {nombre:'Una cuarta',descripcion:'Descripción 4'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
