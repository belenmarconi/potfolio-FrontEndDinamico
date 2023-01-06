import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeImagenComponent } from './acercade-imagen.component';

describe('AcercadeImagenComponent', () => {
  let component: AcercadeImagenComponent;
  let fixture: ComponentFixture<AcercadeImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
