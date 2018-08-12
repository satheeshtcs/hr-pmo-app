import { TestBed, inject } from '@angular/core/testing';

import { Toaster2Service } from './toaster2.service';

describe('Toaster2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Toaster2Service]
    });
  });

  it('should be created', inject([Toaster2Service], (service: Toaster2Service) => {
    expect(service).toBeTruthy();
  }));
});
