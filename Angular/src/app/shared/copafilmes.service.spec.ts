import { TestBed } from '@angular/core/testing';

import { CopafilmesService } from './copafilmes.service';

describe('CopafilmesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopafilmesService = TestBed.get(CopafilmesService);
    expect(service).toBeTruthy();
  });
});
