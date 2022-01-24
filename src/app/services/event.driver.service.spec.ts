import { TestBed } from '@angular/core/testing';

import { Event.DriverService } from './event.driver.service';

describe('Event.DriverService', () => {
  let service: Event.DriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Event.DriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
