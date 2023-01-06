import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRedesComponent } from './header-redes.component';

describe('HeaderRedesComponent', () => {
  let component: HeaderRedesComponent;
  let fixture: ComponentFixture<HeaderRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
