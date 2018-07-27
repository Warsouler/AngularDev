import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterparameterComponent } from './routerparameter.component';

describe('RouterparameterComponent', () => {
  let component: RouterparameterComponent;
  let fixture: ComponentFixture<RouterparameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterparameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
