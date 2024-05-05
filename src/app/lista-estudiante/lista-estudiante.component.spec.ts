import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudianteComponent } from './lista-estudiante.component';

describe('ListaEstudianteComponent', () => {
  let component: ListaEstudianteComponent;
  let fixture: ComponentFixture<ListaEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEstudianteComponent]
    });
    fixture = TestBed.createComponent(ListaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
