/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UskDbService } from './usk-db.service';

describe('UskDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UskDbService]
    });
  });

  it('should ...', inject([UskDbService], (service: UskDbService) => {
    expect(service).toBeTruthy();
  }));
});
