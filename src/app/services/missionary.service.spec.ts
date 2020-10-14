import { TestBed } from '@angular/core/testing';

import { MissionaryService } from './missionary.service';

describe('MissionaryService', () => {
  let service: MissionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
