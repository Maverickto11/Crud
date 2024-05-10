import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEstudianteComponent } from './lista-estudiante/lista-estudiante.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path : 'estudiantes',component:ListaEstudianteComponent},
  {path : 'registrar-alumno',component:RegistrarAlumnoComponent},
  {path : '', redirectTo:'estudiantes', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent,
    RegistrarAlumnoComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
