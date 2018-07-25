import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NggSylesandClassComponent } from './ngg-sylesand-class.component';

describe('NggSylesandClassComponent', () => {
  let component: NggSylesandClassComponent;
  let fixture: ComponentFixture<NggSylesandClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NggSylesandClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NggSylesandClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
