import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-routerparameter2',
  templateUrl: './routerparameter2.component.html',
  styleUrls: ['./routerparameter2.component.css']
})
export class Routerparameter2Component implements OnInit {

  myid:number=0;
  constructor(private route: ActivatedRoute) {
    //  En la variable route.snapshot.params['parametro'] se encuentra el valor
    alert(this.route.snapshot.params['id']);
    this.myid=this.route.snapshot.params['id'];
    }
 
  ngOnInit() {
  }

}
