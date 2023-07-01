import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './Service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';
  monto: number = 0;
  descuento: number = 0;
  acarreo: number = 3;
  dinero: number[] = [ 0, 0, 0, 0 ];

constructor(private data: DataService, private router: Router){

}

OnInit(){

}


Terminar(){
  this.data.pantalla = ""
  this.data.numeroCuenta = "";
  this.data.clave = "";
  this.data.monto = "";
  this.router.navigate(['/inicio']);
}

Corregir(){

  this.display = this.display.slice(0, -1);
  this.concatenarGeneral();
}

concatenarGeneral(){
  if (this.data.pantalla == "cuenta") {
    this.data.numeroCuenta = this.display;
  } else if (this.data.pantalla == "clave") {
    this.data.clave = this.display;
  }
  else if (this.data.pantalla == "monto") {
    this.data.monto = this.display;
  }
}

concatenar(valor: string){
  this.display = this.display + valor;
  this.concatenarGeneral();
  if (this.data.pantalla == "") {
    this.display = "";
    this.router.navigate(['/inicio']);
  }


}

Confirmar(){
  if (this.data.pantalla == "") {

    alert("Opcion no valida");
    this.router.navigate(['/inicio']);

  } else if (this.data.pantalla == "cuenta") {

    if (this.data.numeroCuenta == this.data.cuentas[0].numeroCuenta) {
      this.display = '';

      this.data.pantalla = "clave"
      console.log(this.data.numeroCuenta)
      this.router.navigate(['/validarClave']);
    } else {
      alert("El numero de cuenta " + this.data.numeroCuenta + " no Existe")
    }


  } else if (this.data.pantalla == "clave") {

    if (this.data.clave == this.data.cuentas[0].clave) {

      this.display = '';

      this.data.pantalla = "monto"
      console.log(this.data.clave)
      this.router.navigate(['/monto']);

    } else {
      alert("Su clave es incorrecta");
    }

  } else if (this.data.pantalla == "monto"){

    this.display = '';
    this.dinero = [0, 0, 0, 0]
    this.monto = Number(this.data.monto);
    console.log(this.monto);
    console.log(this.acarreo);

    if (this.monto >= 10000 && this.monto % 10000 == 0) {

      if (this.monto <= this.data.cuentas[0].dinero) {

        this.descuento = this.monto;
        this.data.cuentas[0].dinero = this.data.cuentas[0].dinero - this.descuento;

        while(this.descuento != 0){
          
          if (this.descuento >= 10000 && this.acarreo == 3)
          {
              this.dinero[3] = this.dinero[3] + 1;
              this.descuento = this.descuento - 10000;
              
          }
          if (this.descuento >= 20000 && this.acarreo >= 2)
                {
                    this.dinero[2] = this.dinero[2] + 1;
                    this.descuento = this.descuento - 20000;
                }
                if (this.descuento >= 50000 && this.acarreo >= 1)
                {
                    this.dinero[1] = this.dinero[1] + 1;
                    this.descuento = this.descuento - 50000;
                }
                if (this.descuento >= 100000 && this.acarreo >= 0)
                {
                    this.dinero[0] = this.dinero[0] + 1;
                    this.descuento = this.descuento - 100000;
                }
                this.acarreo = this.acarreo - 1;

                if(this.acarreo < 0)
                {
                    this.acarreo = 3;
                }

        }

        alert("Retiro Terminado con Exito");
        this.Terminar();

      } else {
        alert("Su dinero es insuficiente para este retiro")
      }

    } else {
      alert("El Monto debe ser superior a 10000 y multiplo de 10000")
    }

  } else{
    this.Terminar();
  }





}

}
