import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../estudiante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EstudianteService } from '../estudiante.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  editarForm: FormGroup;
  estudiante: Estudiante;
  public onClose: Subject<Estudiante>;

  @Output() estudianteActualizado: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();


  constructor(public bsModalRef: BsModalRef, private formBuilder: FormBuilder, private estudianteService: EstudianteService) {}

  ngOnInit() {
    this.editarForm = this.formBuilder.group({
      nombre: [this.estudiante.nombre, Validators.required],
      apellido: [this.estudiante.apellido, Validators.required],
      email: [this.estudiante.email, [Validators.required, Validators.email]],

    });
    this.onClose = new Subject();

  }
  onSubmit() {
    if (this.editarForm.valid) {
      // Aquí va la lógica para manejar el envío del formulario
      this.onClose.next(this.editarForm.value);
      this.bsModalRef.hide();
      this.guardarCambios();

    }
    
  }
  cerrarModal() {
    this.bsModalRef.hide();
  }

  private guardarCambios() {

    
    // Actualiza el estudiante con los datos del formulario
    const estudianteEditado: Estudiante = {
      ...this.estudiante,
      nombre: this.editarForm.value.nombre,
      apellido: this.editarForm.value.apellido,
      email: this.editarForm.value.email
    };

    // Realiza la solicitud PUT al servidor para guardar los cambios
    this.estudianteService.editarEstudiante(this.estudiante.id, estudianteEditado).subscribe(
      (estudianteActualizado) => {
        // Notifica al componente padre que se han guardado los cambios
        this.estudianteActualizado.emit(estudianteActualizado);
        this.onClose.next(estudianteActualizado);
        this.bsModalRef.hide();
      },
      (error) => {
        console.error('Error al editar estudiante:', error);
      }
    );
  }
}
