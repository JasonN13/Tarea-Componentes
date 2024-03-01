import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje2',
  standalone: true,
  imports: [],
  templateUrl: './mensaje2.component.html',
  styleUrl: './mensaje2.component.css'
})
export class Mensaje2Component {
  TextoInicial = 'Este es un componente Secundario'
  Imagen 
  constructor(){
    this.Imagen=`https://picsum.photos/id/${getRandomInt(300)}/300/200/?blur`
  }
}

function getRandomInt(max: number){
  return Math.floor(Math.random() * max);
}