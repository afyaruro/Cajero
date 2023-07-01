import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-validar-pass',
  templateUrl: './validar-pass.component.html',
  styleUrls: ['./validar-pass.component.css']
})
export class ValidarPassComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
