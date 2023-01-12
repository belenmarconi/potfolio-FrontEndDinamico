import { TestBed } from '@angular/core/testing';

import { ExplaboralServicioService } from './explaboral-servicio.service';

describe('ExplaboralServicioService', () => {
  let service: ExplaboralServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplaboralServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
