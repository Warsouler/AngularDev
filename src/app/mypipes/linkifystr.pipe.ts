// Creamos nuestro pipe, importamos pipe y pipe transform
// luego tambien importamos la libreria linkifyjs que instalamos con npm install linkifyjs

import { Pipe, PipeTransform } from "@angular/core";
import linkifyStr from 'linkifyjs/string';
// le declaramos un nombre que es el que se usa en el código html o ts
@Pipe({name:'linkifystr'})
export class LinkifystrPipe implements PipeTransform{
//     transform(value: any, ...args: any[]) {
//         throw new Error("Method not implemented.");
//     }
//     asi viene por defecto transform q debemos implementar

// pero nosotros lo vamos a declarar tipado, diciendo que va a tomar un string llamado str
//  y va a devolver un string que tomando el argumento si no es nulo lo va a transformar en link usando
// la libreria que la declaramos con el nombre linkifyStr y a esta libreria se le pasa como parametro el 
// link digamos el string en str, y como target pasamos system ya que es angular que se va a encargar
// de ver en donde afecta y q abre cuando es presionado, si es web la misma ventana o una nueva
// app mobile un navegador por defecto o alguna otra app, etc, le derivamos el trabajo a angular
// en el caso que el string sea nulo devolvemos el string nulo.
        transform(str:string):string{
            return str? linkifyStr(str,{target:'_system'}): str;
        }
}

