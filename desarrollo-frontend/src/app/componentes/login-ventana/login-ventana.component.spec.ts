import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVentanaComponent } from './login-ventana.component';

describe('LoginVentanaComponent', () => {
  let component: LoginVentanaComponent;
  let fixture: ComponentFixture<LoginVentanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVentanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
