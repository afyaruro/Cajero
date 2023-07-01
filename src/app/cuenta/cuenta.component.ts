import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
    
  }

}
