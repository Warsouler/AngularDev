import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyloggedpathComponent } from './onlyloggedpath.component';

describe('OnlyloggedpathComponent', () => {
  let component: OnlyloggedpathComponent;
  let fixture: ComponentFixture<OnlyloggedpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyloggedpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyloggedpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
