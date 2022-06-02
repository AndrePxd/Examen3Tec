import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cirugias',
  templateUrl: './cirugias.component.html',
  styleUrls: ['./cirugias.component.css']
})
export class CirugiasComponent implements OnInit {
  selectCirugia: string ='';
  cirugias: any =[
    'Cirugia dental de implantes-Ivan Zabala',
    'Cirugía dental cosmética-Carlos Zarate',
    'Cirugía mandibular correctiva-Luis Felipe Perez'
  ];
 
  formularioDeCirugias:FormGroup;

  constructor(
      public formulario:FormBuilder,
      private crudService:CrudService,
      // private ruteador:Router
    ){ 
    this.formularioDeCirugias=this.formulario.group({
      nombre:[''],
      correo:[''],
      especialista:['']
    })
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("Funciona");
    console.log(this.formularioDeCirugias.value);
    this.crudService.AgregarCirugia(this.formularioDeCirugias.value).subscribe();

   // this.ruteador.navigateByUrl('/listar-empleado')
  }

  radioChangeHandler (event:any){
    this.selectCirugia =event.target.value;
  }


}
