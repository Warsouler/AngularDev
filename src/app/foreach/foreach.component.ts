import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.css']
})
export class ForeachComponent implements OnInit {
// con any agarramos cualquier tipo de objetos
  lugares:any=[
    {nombre:'Floreria la Gardania'},
    {nombre:'Donas la pasadita'},
    {nombre:'Veterinaria Huellitas Felices'},
    {nombre:'Una cuarta'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
