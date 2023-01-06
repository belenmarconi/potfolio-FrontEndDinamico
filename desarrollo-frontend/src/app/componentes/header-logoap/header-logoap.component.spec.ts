import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoapComponent } from './header-logoap.component';

describe('HeaderLogoapComponent', () => {
  let component: HeaderLogoapComponent;
  let fixture: ComponentFixture<HeaderLogoapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLogoapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogoapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
