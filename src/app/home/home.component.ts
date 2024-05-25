import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Estudiante } from '../Estudiante.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  estudiantes: any[] = []; // Aquí almacenaremos los estudiantes recibidos del backend

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes(): void {
    this.api.getProducts().subscribe(
      (data: any) => {
        this.estudiantes = data;
      },
      (error) => {
        console.error('Error al obtener los estudiantes:', error);
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
