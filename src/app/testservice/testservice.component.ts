import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit {

  lugares=null;
  // Inyectamos en el constructor el servicio
  constructor(private lugaresService:LugaresService) {
    this.lugares=lugaresService.getLugares();
   }

  ngOnInit() {
  }

}
