import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkermapComponent } from './markermap.component';

describe('MarkermapComponent', () => {
  let component: MarkermapComponent;
  let fixture: ComponentFixture<MarkermapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkermapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
