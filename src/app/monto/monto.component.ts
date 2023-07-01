import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-monto',
  templateUrl: './monto.component.html',
  styleUrls: ['./monto.component.css']
})
export class MontoComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
