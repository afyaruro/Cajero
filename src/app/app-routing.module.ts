import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { CuentaComponent } from './cuenta/cuenta.component';
import { ValidarPassComponent } from './validar-pass/validar-pass.component';
import { MontoComponent } from './monto/monto.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'cuenta', component: CuentaComponent},
  {path: 'validarClave', component: ValidarPassComponent},
  {path: 'monto', component: MontoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
