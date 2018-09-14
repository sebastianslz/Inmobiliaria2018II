import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AsistenteVentaComponent } from './asistente-venta/asistente-venta.component';
import { AsistenteArrendamientoComponent } from './asistente-arrendamiento/asistente-arrendamiento.component';
import { ReparadorComponent } from './reparador/reparador.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AsistenteVentaComponent,
    AsistenteArrendamientoComponent,
    ReparadorComponent
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

