import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';
import { Cirugia } from './Cirugia';
import { Reserva } from './Reserva';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string='http://localhost/Centro/'; //api de php

  constructor(private clientHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  AgregarCirugia(datosCirugia:Cirugia):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar1=1",datosCirugia);
  }

  AgregarReserva(datosReserva:Reserva):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar2=1",datosReserva);
  }

  ObtenerEmpleados(){
    return this.clientHttp.get(this.API);
  }
  BorrarEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }
  ObtenerEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }

}
