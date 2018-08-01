import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-listupdatelugares',
  templateUrl: './listupdatelugares.component.html',
  styleUrls: ['./listupdatelugares.component.css']
})
export class ListupdatelugaresComponent implements OnInit {

   ngOnInit() {
  }

  constructor(private lugarService:LugaresService) {
    this.verLugares();
   }
  lugares=null;
  verLugares()
  {  
    this.lugarService.getLugaresFire().valueChanges().subscribe(lugares=>{
      this.lugares=lugares;
    }
  );

  }

}
