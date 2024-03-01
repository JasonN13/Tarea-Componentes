import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mensaje1Component } from './mensaje1/mensaje1.component';
import { Mensaje2Component } from './mensaje2/mensaje2.component';
import { Mensaje3Component } from './mensaje3/mensaje3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Mensaje1Component,Mensaje2Component,Mensaje3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tarea-Componentes';
  Componente = 'Esta funcionando';
}
