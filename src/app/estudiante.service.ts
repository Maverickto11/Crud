import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  //Lista de Estudiante del Backend
  private ListaURL= "http://localhost:8080/api/v1/Alumno";
  private iDURL= "http://localhost:8080/api/v1";

  constructor(private httpEstud : HttpClient) { }

  obtenerListaEstudiante(): Observable<Estudiante[]>{ 
  return this.httpEstud.get<Estudiante[]>(`${this.ListaURL}`);
  }

  editarEstudiante(id: number, estudianteActualizado: Estudiante): Observable<Estudiante> {
    const url = `${this.iDURL}/${id}`;
  
    // Realiza la solicitud PUT al servidor
    return this.httpEstud.put<Estudiante>(url, estudianteActualizado);
  }

  eliminarEstudiante(id: number): Observable<Object> {
    const url = `${this.iDURL}/${id}`;
  
    // Realiza la solicitud DELETE al servidor
    return this.httpEstud.delete<Object>(url);
  }

  registroEstudiante(estudiante:Estudiante) : Observable<Object>{
    return this.httpEstud.post(`${this.ListaURL}`, estudiante);
  } 
}
