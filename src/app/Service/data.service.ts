import { Injectable } from '@angular/core';
import { Cuenta } from '../Models/Cuenta';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pantalla: string = "";
  numeroCuenta: string = "";
  clave: string = "";
  monto: string = "";


  cuentas: Cuenta[] = [
    { propietario: 'Andres Yaruro', numeroCuenta: '03', clave: '03', 
    correo: 'andresyaruro20@gmail.com', dinero: 500000 }
  ];

  constructor() {
  }
}
