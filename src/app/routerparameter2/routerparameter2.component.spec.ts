import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routerparameter2Component } from './routerparameter2.component';

describe('Routerparameter2Component', () => {
  let component: Routerparameter2Component;
  let fixture: ComponentFixture<Routerparameter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routerparameter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routerparameter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
