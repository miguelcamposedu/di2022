import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent implements OnInit {
  @Input() producto: string = '';
  @Input() isFav = false;

  constructor() {}

  ngOnInit(): void {}
}
