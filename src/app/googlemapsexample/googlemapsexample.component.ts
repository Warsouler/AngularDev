import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemapsexample',
  templateUrl: './googlemapsexample.component.html',
  styleUrls: ['./googlemapsexample.component.css']
})
export class GooglemapsexampleComponent implements OnInit {
lat:number = -32.9501619;
lng:number = -60.6546833;
  constructor() { }

  ngOnInit() {
  }

}
