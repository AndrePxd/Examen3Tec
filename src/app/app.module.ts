import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import{HttpClientModule} from '@angular/common/http';
import { PlantelComponent } from './componentes/plantel/plantel.component';
import { CirugiasComponent } from './componentes/cirugias/cirugias.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent,
    PlantelComponent,
    CirugiasComponent,
    ReservasComponent,
    HomeComponent,
    ServiciosComponent,
    ContactosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
