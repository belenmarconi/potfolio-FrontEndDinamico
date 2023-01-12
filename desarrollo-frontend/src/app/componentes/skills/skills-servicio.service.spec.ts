import { TestBed } from '@angular/core/testing';

import { SkillsServicioService } from './skills-servicio.service';

describe('SkillsServicioService', () => {
  let service: SkillsServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
