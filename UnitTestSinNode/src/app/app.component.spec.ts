import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Aca decimos el modulo que vamos a probar
describe('AppComponent', () => {
  // beforeeach es lo q se va a crear antes de empezar a correr los units test
  //esto quiere decir que se va a ejecutar cada vez q se crea la app. como es limpiar campos de bd o reiniciar algo
  beforeEach(async(() => {
    // TestBed acá para configurar frameworks externos de testing y componentes internos nuestros.
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      // compila los componentes que incluimos en declarations
    }).compileComponents();
  }));

  // aca empiezan las estructuras de cada test, este esperamos que se cree bien
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // en este por ejemplo vemos que el atributo titulo del componente sea igual a app
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  // acá vemos si en todo nuestro dom hay un h1 q contenga en el texto Welcome to app!
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // esto es porque angular no comienza con el html  rendereado, sino q pone el html
    // a secas sin renderizar y necesitamos esperar q este terminado todo el renderizado.
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
// para correr los test se usa ng test en la consola o cmd
