import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaptypescComponent } from './maptypesc.component';

describe('MaptypescComponent', () => {
  let component: MaptypescComponent;
  let fixture: ComponentFixture<MaptypescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaptypescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaptypescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
