import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  //url for FormularioComponent, like Formulario
  {path: "Formulario", component: FormularioComponent},

  //inicio url for InicioComponent, like "Inicio"
  {path: "Inicio", component: InicioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
