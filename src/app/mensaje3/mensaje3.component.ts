import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje3',
  standalone: true,
  imports: [],
  templateUrl: './mensaje3.component.html',
  styleUrl: './mensaje3.component.css'
})
export class Mensaje3Component {
  TextoInicial = 'Este es un componente Terciario'
  Imagen 
  constructor(){
    this.Imagen=`https://picsum.photos/id/${getRandomInt(300)}/500/300.webp`
  }
}

function getRandomInt(max: number){
  return Math.floor(Math.random() * max);
}