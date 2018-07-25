import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IffComponent } from './iff.component';

describe('IffComponent', () => {
  let component: IffComponent;
  let fixture: ComponentFixture<IffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
