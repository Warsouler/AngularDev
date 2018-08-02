import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthttpfirebaseComponent } from './posthttpfirebase.component';

describe('PosthttpfirebaseComponent', () => {
  let component: PosthttpfirebaseComponent;
  let fixture: ComponentFixture<PosthttpfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosthttpfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosthttpfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
