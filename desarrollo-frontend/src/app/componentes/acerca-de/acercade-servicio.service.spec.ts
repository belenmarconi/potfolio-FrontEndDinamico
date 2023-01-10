import { TestBed } from '@angular/core/testing';

import { AcercadeServicioService } from './acercade-servicio.service';

describe('AcercadeServicioService', () => {
  let service: AcercadeServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcercadeServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
