import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes2dComponent } from './imagenes2d.component';

describe('Imagenes2dComponent', () => {
  let component: Imagenes2dComponent;
  let fixture: ComponentFixture<Imagenes2dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Imagenes2dComponent]
    });
    fixture = TestBed.createComponent(Imagenes2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
