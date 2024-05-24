import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from "./navegacion/navegacion.component";
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavegacionComponent, HomeComponent]
})
export class AppComponent{
  title = 'crud';



  
}
