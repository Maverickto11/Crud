import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Estudiante } from '../Estudiante.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() show: boolean = false;
  @Input() estudiante: Estudiante = { id: 0, nombre: '', apellido: '', email: '' };
  @Output() close = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<Estudiante>();

  constructor(private api: ApiService) { }
  onClose() {
    this.show = false;
    this.close.emit();

  }

  onSubmit() {
    this.api.editarEstudiante(this.estudiante.id, this.estudiante).subscribe(
      response => {
        console.log('Datos guardados exitosamente', response);
        this.onClose();
        this.guardar.emit(this.estudiante); 
      },
      error => {
        console.error('Error al guardar los datos', error);
      }
    );
  }
}
