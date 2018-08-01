import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    // ponemos a antes para que solo aplique para etiquetas a hypervinculos
selector: 'li[contar-clicks2]'


})
export class ContacrClicks2Directive{
    clickN=0;
    // para ver como hosteamos alrrevez, tomando desde el ts al html vemos que bindeando un estilo, vemos que al hacer click le subimos la opacidad a cada fila.
    // en resumen con codigo typescript podemos cambiar el estilo o algun atributo de html tomandolo como una variable. Lo unico que a un elemento a de ancla no se le puede poner opacidad
    // por lo tanto vamos a refenciarlo a un elemento li.
    @HostBinding('style.opacity') myopacity: number = .1;
    @HostListener('click',['$event.target']) onClick(btn){
        console.log('a',btn,"Número de clicks:",++this.clickN);
        // agregue una validacion que si la opacidad es mayor a 1 y clickean se resetea
        if(this.myopacity>1)
        this.myopacity=.1;
        else
        this.myopacity+=.1;
    }
}
