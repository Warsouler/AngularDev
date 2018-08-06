import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnpipeComponent } from './ownpipe.component';

describe('OwnpipeComponent', () => {
  let component: OwnpipeComponent;
  let fixture: ComponentFixture<OwnpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
