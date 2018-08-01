import { Directive, HostListener } from "@angular/core";

@Directive({
    // ponemos a antes para que solo aplique para etiquetas a hypervinculos
selector: 'a[contar-clicks]'


})
export class ContacrClicksDirective{
    clickN=0;
    // aca declaramos a través de la directiva que vamos a escuchar el evento click, como parametro lo que agarramos es un arreglo de un solo elemento que es el $event.target que es el elemento
    // que invoco al evento, osea el this
    
    @HostListener('click',['$event.target']) onClick(btn){
        console.log('a',btn,"Número de clicks:",++this.clickN);
    }
}
