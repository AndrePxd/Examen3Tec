import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  Empleados:any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
      console.log(respuesta);
      this.Empleados=respuesta;
    })
  }
}
