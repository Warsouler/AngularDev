import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markermap',
  templateUrl: './markermap.component.html',
  styleUrls: ['./markermap.component.css']
})
export class MarkermapComponent implements OnInit {

lat:number=-32.94718;
lng:number=-60.6657014;
// lat:number=-32.94718;
// lng:number=-60.6657014;
  
markmaps=[
  {id:1,name:"Proxit",lat:-32.9502445,lng:-60.6568437},
  {id:2,name:"hola2",lat:-32.9431515,lng:-60.6646717},
  {id:3,name:"hola3",lat:-32.9709368,lng:-60.6452035},

]
  constructor() { }

  ngOnInit() {
  }

}
