import { TestBed, inject } from '@angular/core/testing';

import { CoordService } from './coord.service';

describe('CoordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoordService]
    });
  });

  it('should be created', inject([CoordService], (service: CoordService) => {
    expect(service).toBeTruthy();
  }));
});
