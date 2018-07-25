import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapsexampleComponent } from './googlemapsexample.component';

describe('GooglemapsexampleComponent', () => {
  let component: GooglemapsexampleComponent;
  let fixture: ComponentFixture<GooglemapsexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapsexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
