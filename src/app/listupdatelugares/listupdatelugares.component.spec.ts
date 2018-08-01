import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListupdatelugaresComponent } from './listupdatelugares.component';

describe('ListupdatelugaresComponent', () => {
  let component: ListupdatelugaresComponent;
  let fixture: ComponentFixture<ListupdatelugaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListupdatelugaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListupdatelugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
