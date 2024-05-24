import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
}
