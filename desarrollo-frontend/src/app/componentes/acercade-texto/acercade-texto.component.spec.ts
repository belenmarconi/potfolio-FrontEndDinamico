import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeTextoComponent } from './acercade-texto.component';

describe('AcercadeTextoComponent', () => {
  let component: AcercadeTextoComponent;
  let fixture: ComponentFixture<AcercadeTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
