import { Component } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: any
  constructor(private fb:FormBuilder){}

  ngOninit():void{
    this.formulario = this.fb.group({
      campo1: ['',[Validators.required, Validators.minLength(4)]],
      campo2: ['',[Validators.required, Validators.minLength(4)]],
    })
  }
  get FormularioReactivo(){
    return this.formulario.controls;
  }
  botonEnviar(){
    console.log(this.formulario.value);
  }
}


