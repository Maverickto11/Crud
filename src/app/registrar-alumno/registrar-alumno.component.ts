import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit{

  mensajeError = '';
  nombre: string = '';
  email: string = '';
  estudiante : Estudiante = new Estudiante();
  registroExitoso = false;

  constructor(private estudianteService:EstudianteService, private router:Router){}
  ngOnInit(): void {
  }
  submitForm() {
    // Aquí puedes manejar el envío de los datos, por ejemplo, enviar a una API o procesarlos.
  }

  // Suponiendo que aquí se realiza la lógica de registro
  realizarRegistro() {
    // Llamada al servicio para verificar la existencia de datos duplicados
          this.estudianteService.registroEstudiante(this.estudiante).subscribe(dato =>{
            console.log(dato);  
            this.estudiante.nombre = '';
            this.estudiante.apellido = '';
            this.estudiante.email = '';
            // Indicar que el registro fue exitoso
            this.registroExitoso = true; 
          },error => console.log(error));  
                         
  }

  onSubmit(){
    this.realizarRegistro()
  }
  
}
