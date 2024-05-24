import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../estudiante';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = []; 
  bsModalRef: BsModalRef;

    constructor(private estudianteService: EstudianteService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.obtenerEstudiante();
  }

  private obtenerEstudiante() {
    this.estudianteService.obtenerListaEstudiante().subscribe(data => {
      this.estudiantes = data;
    });
  }



  editarEstudiante(estudiante: Estudiante) {
    const initialState = {
      estudiante: estudiante
    };
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState });
    this.bsModalRef.content.estudianteActualizado.subscribe((estudianteActualizado: Estudiante) => {
      // Actualizar la lista con el estudiante actualizado
      const index = this.estudiantes.findIndex(e => e.id === estudianteActualizado.id);
      if (index !== -1) {
        this.estudiantes[index] = estudianteActualizado;
      }
    });
  }
  


  
    eliminarEstudiante(estudiante: Estudiante) {
      const confirmacion = confirm(`¿Estás seguro de que deseas eliminar a ${estudiante.nombre}?`);

      if (confirmacion) {
        this.estudianteService.eliminarEstudiante(estudiante.id).subscribe(
          () => {
            // Filtra los estudiantes para quitar el estudiante eliminado de la lista
            this.estudiantes = this.estudiantes.filter(e => e.id !== estudiante.id);
          },
          (error) => {
            console.error('Error al eliminar estudiante:', error);
          }
        );
      }

    }
  
}
