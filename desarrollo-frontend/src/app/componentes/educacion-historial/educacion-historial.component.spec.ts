import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionHistorialComponent } from './educacion-historial.component';

describe('EducacionHistorialComponent', () => {
  let component: EducacionHistorialComponent;
  let fixture: ComponentFixture<EducacionHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
