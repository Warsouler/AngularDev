import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesComponent } from './places.component';
import { PlacesService } from './places.service';

describe('PlacesComponent', () => {
  let component: PlacesComponent;
  let fixture: ComponentFixture<PlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesComponent],
      // providers:[PlacesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // creamos un test solo para que cree el componente nomas
  it('should create the app',()=>{
    let fixture=TestBed.createComponent(PlacesComponent);
    let app=fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // creamos otro test para ver q los datos del component sean los mismos q los del servicio
  it('Servicio y memoria iguales',()=>{
  let fixture=TestBed.createComponent(PlacesComponent);
  let app = fixture.debugElement.componentInstance;
  // acá declaramos una variable que tome el servicio desde el inyector.
  let placeService=fixture.debugElement.injector.get(PlacesService);
  expect(app.places).toEqual(placeService.places);
  }) 
});
