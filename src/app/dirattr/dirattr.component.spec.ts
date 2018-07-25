import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirattrComponent } from './dirattr.component';

describe('DirattrComponent', () => {
  let component: DirattrComponent;
  let fixture: ComponentFixture<DirattrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirattrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirattrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
