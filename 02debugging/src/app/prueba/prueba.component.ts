import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  i = 0;

  constructor() { }

  ngOnInit(): void {
    this.i = 4;
    console.log('Ha iniciado Prueba Component');
    this.i = 10;
  }

}
