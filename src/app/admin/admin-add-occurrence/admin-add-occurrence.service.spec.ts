import { TestBed, inject } from '@angular/core/testing';

import { AdminAddOccurrenceService } from './admin-add-occurrence.service';

describe('AdminAddOccurrenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAddOccurrenceService]
    });
  });

  it('should be created', inject([AdminAddOccurrenceService], (service: AdminAddOccurrenceService) => {
    expect(service).toBeTruthy();
  }));
});
