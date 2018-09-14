import { Component } from '@angular/core';
import { AsistenteVentaComponent } from './asistente-venta/asistente-venta.component';
import { AsistenteArrendamientoComponent } from './asistente-arrendamiento/asistente-arrendamiento.component';
import { ReparadorComponent } from './reparador/reparador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoInmobiliaria';
}


