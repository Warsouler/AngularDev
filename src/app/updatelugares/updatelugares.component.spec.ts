import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelugaresComponent } from './updatelugares.component';

describe('UpdatelugaresComponent', () => {
  let component: UpdatelugaresComponent;
  let fixture: ComponentFixture<UpdatelugaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelugaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
