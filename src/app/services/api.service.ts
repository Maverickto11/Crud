import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environment';
import { Estudiante } from '../Estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = environment.url;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.baseUrl}/api/v1/Alumno`).pipe(
      map(response => {
        console.log('Respuesta recibida:', response);
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '¡Error desconocido!';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error del lado del cliente: ${error.error.message}`;
        } else {
          errorMessage = `Error del lado del servidor: ${error.status} ${error.message}`;
        }
        console.error(`Error al obtener productos desde ${this.baseUrl}/api/v1`, errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  registrarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${this.baseUrl}/api/v1/Alumno`, estudiante).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '¡Error desconocido!';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error del lado del cliente: ${error.error.message}`;
        } else {
          errorMessage = `Error del lado del servidor: ${error.status} ${error.message}`;
        }
        console.error(`Error al registrar estudiante en ${this.baseUrl}/api/v1/Alumno`, errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
