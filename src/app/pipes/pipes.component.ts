import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  lugares:any=[
    {nombre:'Floreria la Gardania'},
    {nombre:'Donas la pasadita'},
    {nombre:'Veterinaria Huellitas Felices'},
    {nombre:'Una cuarta'}
  ]
  //Una fecha en date.now();
  // fecha:string="1502305982698";
  fecha:string=Date();
  constructor() { }

  ngOnInit() {
  }

}
