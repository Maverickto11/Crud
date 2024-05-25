import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Estudiante } from '../Estudiante.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, ModalComponent]
})
export class HomeComponent implements OnInit {
  estudiantes: Estudiante[] = []; // Aquí almacenaremos los estudiantes recibidos del backend
  showModal: boolean = false;
  estudiante: Estudiante = { id: 1, nombre: '', apellido: '', email: '' };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();

  }

  
  openModal(estudiante: Estudiante) {
    // Solo muestra el modal si la lista de estudiantes se ha cargado correctamente
    if (this.estudiantes && this.estudiantes.length > 0) {
      this.estudiante = estudiante;
      this.showModal = true;
    }
  }

  obtenerEstudiantes(): void {
    this.api.getProducts().subscribe(
      (data: Estudiante[]) => {
        this.estudiantes = data;
      },
      (error) => {
        console.error('Error al obtener los estudiantes:', error);
      }
    );
  }

  guardarCambios(estudianteActualizado: Estudiante) {
    this.api.editarEstudiante(estudianteActualizado.id, estudianteActualizado).subscribe(
      estudianteEditado => {
        console.log('Estudiante editado exitosamente:', estudianteEditado);
        // Puedes realizar alguna acción adicional si lo necesitas, como actualizar la lista de estudiantes, etc.
        this.showModal = false; // Cierra el modal después de editar exitosamente
      },
      error => {
        console.error('Error al editar el estudiante:', error);
        // Puedes manejar el error de alguna manera, como mostrar un mensaje de error al usuario, etc.
      }
    );
  }

  eliminarEstudiante(estudiante: Estudiante) {
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar a ${estudiante.nombre}?`);

    if (confirmacion) {
      this.api.eliminarEstudiante(estudiante.id).subscribe(
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
