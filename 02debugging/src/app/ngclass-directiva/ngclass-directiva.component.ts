import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-directiva',
  templateUrl: './ngclass-directiva.component.html',
  styleUrls: ['./ngclass-directiva.component.css']
})
export class NgclassDirectivaComponent implements OnInit {
  isLight = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeMode() {
    this.isLight = !this.isLight;
  }

}
