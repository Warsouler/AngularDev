import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iff',
  templateUrl: './iff.component.html',
  styleUrls: ['./iff.component.css']
})
export class IffComponent implements OnInit {
  lugares:any=[
    {active:true, nombre:'Floreria la Gardania'},
    {active:false,nombre:'Donas la pasadita'},
    {active:true, nombre:'Veterinaria Huellitas Felices'},
    {active:false, nombre:'Una cuarta'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
