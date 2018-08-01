import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

//Declaramos la directiva con un decorador del typescript.
@Directive({
    // Escribimos nuestro selector html
selector:'[resaltar]'

})
// Exportamos nuestra Clase
export class ResaltarDirective implements OnInit{

// El elemento elementRef es una referencia de html para 
// manipular en typescript

// El renderer (o rendeder2) es una referencia para manipular
// el html pero enfocado para los atributos css.
// Este renderer sirve para transpilar despues el codigo css
// si es que angular tambien trabaja y transpila a otras 
// plataformas, por ejemplo si usamos angular para 
// servidor ademas de cliente o para otras plataformas 
// que soporten angular.
constructor(private elRef: ElementRef, 
    private renderer:Renderer2) {
}

// Vamos a declarar un Input de entrada para el elemento y si

@Input('resaltar') plan:string='';

// el plan es pagado usamos el renderer pasado por inyección
// de dependencias y le damos estilo a nuestro componente.


ngOnInit(){
   
    if(this.plan==='pagado'){
        this.renderer.setStyle(this.elRef.nativeElement
        , 'background-color','yellow');
        this.renderer.setStyle(this.elRef.nativeElement
            , 'font-weight','bold');
        }


    }

}
// Una vez terminado deberemos ir al appmodulets para 
// en el core de declarations podramos poner esa declaracion
//  nueva y la reconozca, e importarla si el framework no la hace solo.