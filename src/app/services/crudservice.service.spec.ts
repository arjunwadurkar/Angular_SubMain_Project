import { TestBed } from '@angular/core/testing';

import { CrudserviceService } from './crudservice.service';

describe('CrudserviceService', () => {
  let service: CrudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
