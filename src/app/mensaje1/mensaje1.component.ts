import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje1',
  standalone: true,
  imports: [],
  templateUrl: './mensaje1.component.html',
  styleUrl: './mensaje1.component.css'
})
export class Mensaje1Component {
  TextoInicial = 'Este es un componente inicial'
  Imagen 
  constructor(){
    this.Imagen=`https://picsum.photos/id/${getRandomInt(300)}/500/500?grayscale`
  }
}

function getRandomInt(max: number){
  return Math.floor(Math.random() * max);
}