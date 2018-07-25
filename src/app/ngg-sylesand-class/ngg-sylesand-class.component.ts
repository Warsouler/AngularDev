import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngg-sylesand-class',
  templateUrl: './ngg-sylesand-class.component.html',
  styleUrls: ['./ngg-sylesand-class.component.css']
})
export class NggSylesandClassComponent implements OnInit {
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
