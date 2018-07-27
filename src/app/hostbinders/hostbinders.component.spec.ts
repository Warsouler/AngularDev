import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostbindersComponent } from './hostbinders.component';

describe('HostbindersComponent', () => {
  let component: HostbindersComponent;
  let fixture: ComponentFixture<HostbindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostbindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostbindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
