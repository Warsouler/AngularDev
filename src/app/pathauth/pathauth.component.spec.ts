import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathauthComponent } from './pathauth.component';

describe('PathauthComponent', () => {
  let component: PathauthComponent;
  let fixture: ComponentFixture<PathauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
