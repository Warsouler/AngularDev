import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenersComponent } from './hostlisteners.component';

describe('HostlistenersComponent', () => {
  let component: HostlistenersComponent;
  let fixture: ComponentFixture<HostlistenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
