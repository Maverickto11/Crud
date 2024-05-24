import { Component } from '@angular/core';
import { Router, RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
