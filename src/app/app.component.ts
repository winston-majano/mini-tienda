import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from "./listado-productos/listado-productos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'mini-tienda';
}
