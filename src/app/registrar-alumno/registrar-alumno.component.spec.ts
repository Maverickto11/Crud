import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlumnoComponent } from './registrar-alumno.component';

describe('RegistrarAlumnoComponent', () => {
  let component: RegistrarAlumnoComponent;
  let fixture: ComponentFixture<RegistrarAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAlumnoComponent]
    });
    fixture = TestBed.createComponent(RegistrarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
