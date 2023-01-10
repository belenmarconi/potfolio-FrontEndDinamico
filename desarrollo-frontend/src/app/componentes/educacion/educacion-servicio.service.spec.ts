import { TestBed } from '@angular/core/testing';

import { EducacionServicioService } from './educacion-servicio.service';

describe('EducacionServicioService', () => {
  let service: EducacionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
