import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  elId:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudeService:CrudService,
    public formulario:FormBuilder,
  ) { 
    this.elId=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elId);

    this.crudeService.ObtenerEmpleado(this.elId).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeEmpleados.setValue({
          nombre:respuesta[0]['nombre'],
          correo:respuesta[0]['correo']
        })
      }
    );
    this.formularioDeEmpleados=this.formulario.group({
      nombre:[''],
      correo:['']
    })
  }

  ngOnInit(): void {
  }


}
