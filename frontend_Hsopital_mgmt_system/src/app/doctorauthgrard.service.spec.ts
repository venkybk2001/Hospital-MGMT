import { TestBed } from '@angular/core/testing';

import { DoctorauthgrardService } from './doctorauthgrard.service';

describe('DoctorauthgrardService', () => {
  let service: DoctorauthgrardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorauthgrardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
