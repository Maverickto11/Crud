import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Alumno } from '../alumno.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nuevoEstudiante: Alumno = { id: 0, nombre: '', apellido: '', email: '' };

  constructor(private api: ApiService) { }

  registrarEstudiante(): void {
    this.api.registrarEstudiante(this.nuevoEstudiante).subscribe(() => {
      console.log('Estudiante registrado correctamente');
      // Puedes agregar aquí lógica adicional, como mostrar un mensaje de éxito o redirigir a otra página.
    });
  }
}
