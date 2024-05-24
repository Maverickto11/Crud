import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, throwError } from 'rxjs';
import { environment } from '../environment';
import { Alumno } from '../alumno.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  envioron: string = environment.url;
  envioron2: string = environment.urls;
  constructor(private http: HttpClient) { }

  
  getProducts() {
    return this.http.get(`${this.envioron}/Alumno`).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'Unknown error!';
            if (error.error instanceof ErrorEvent) {
                // Client-side or network error
                errorMessage = `Client-side error: ${error.error.message}`;
            } else {
                // Backend error
                errorMessage = `Server-side error: ${error.status} ${error.message}`;
            }
            console.error(`Error fetching products from ${environment.url}/Alumno:`, errorMessage);
            return throwError(() => new Error(errorMessage));
        })
    );
}

  registrarEstudiante(estudiante: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${this.envioron2}`, estudiante);
  }
}
