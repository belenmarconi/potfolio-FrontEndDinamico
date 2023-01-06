import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplabHistorialComponent } from './explab-historial.component';

describe('ExplabHistorialComponent', () => {
  let component: ExplabHistorialComponent;
  let fixture: ComponentFixture<ExplabHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplabHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplabHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
