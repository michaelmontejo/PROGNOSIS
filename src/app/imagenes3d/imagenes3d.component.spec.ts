import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenes3dComponent } from './imagenes3d.component';

describe('Imagenes3dComponent', () => {
  let component: Imagenes3dComponent;
  let fixture: ComponentFixture<Imagenes3dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Imagenes3dComponent]
    });
    fixture = TestBed.createComponent(Imagenes3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
