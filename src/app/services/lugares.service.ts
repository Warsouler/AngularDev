import { Injectable } from "../../../node_modules/@angular/core";
// El inyectable sirve para que pueda ser inyectado desde cualquier otro lado de angular
// Los servicios sirven para ser inyectados y reutilizados en varios componentens de angular
@Injectable()
export class LugaresService{

    lugares:any=[
        {id:1,plan: "pagado",cercania:1, distancia: 1,active:true, nombre:'Floreria la Gardania',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 1'},
        {id:2,plan: "gratuito",cercania:1, distancia: 1.8,active:false,nombre:'Donas la pasadita',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 2'},
        {id:3,plan: "gratuito",cercania:2, distancia: 5,active:true, nombre:'Veterinaria Huellitas Felices',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 3'},
        {id:4,plan: "pagado",cercania:2, distancia: 10,active:false, nombre:'Una cuarta',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 4'},
        {id:5,plan: "gratuito",cercania:2, distancia: 5,active:true, nombre:'Carniceria  Huesada',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 5'},
        {id:6,plan: "pagado",cercania:2, distancia: 10,active:false, nombre:'Quinta',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 6'},
        {id:7,plan: "gratuito",cercania:2, distancia: 5,active:true, nombre:'Polleria pollo',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 7'},
        {id:8,plan: "pagado",cercania:2, distancia: 10,active:false, nombre:'Saraza',descripcion:'Esta es una descripcion nueva, mas adelante las completeamos 8'},
      ];
      public getLugares()
      {
          return this.lugares;
      }
}