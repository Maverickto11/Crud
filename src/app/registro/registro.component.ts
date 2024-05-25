import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Estudiante } from '../Estudiante.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nuevoEstudiante: Estudiante = { id: 0, nombre: '', apellido: '', email: '' };
  registroExitoso = false;
  
  constructor(private api: ApiService) { }

  registrarEstudiante(): void {
    this.api.registrarEstudiante(this.nuevoEstudiante).subscribe(() => {
      console.log('Estudiante registrado correctamente');
      this.nuevoEstudiante.nombre = '';
            this.nuevoEstudiante.apellido = '';
            this.nuevoEstudiante.email = '';
      this.registroExitoso = true;
    });
  }
}
