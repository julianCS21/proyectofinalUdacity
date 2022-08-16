import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interItems';
  ciudad = 'Bogota';

  cambiarNombre(nuevaCiudad:string):void{
    this.ciudad = nuevaCiudad;
    
  }
}


