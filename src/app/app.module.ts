import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AsistenteVentaComponent } from './asistente-venta/asistente-venta.component';
import { AsistenteArrendamientoComponent } from './asistente-arrendamiento/asistente-arrendamiento.component';
import { ReparadorComponent } from './reparador/reparador.component';
import { AsesorVentaComponent } from './asesor-venta/asesor-venta.component';
import { AsesorArriendoComponent } from './asesor-arriendo/asesor-arriendo.component';
import { ClienteComponent } from './cliente/cliente.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AsistenteVentaComponent,
    AsistenteArrendamientoComponent,
    ReparadorComponent,
    AsesorVentaComponent,
    AsesorArriendoComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

