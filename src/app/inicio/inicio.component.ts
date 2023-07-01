import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  Retirar(){
    this.data.pantalla = "cuenta";
    console.log(this.data.pantalla)
  }

}
