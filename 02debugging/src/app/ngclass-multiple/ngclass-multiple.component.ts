import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-multiple',
  templateUrl: './ngclass-multiple.component.html',
  styleUrls: ['./ngclass-multiple.component.css']
})
export class NgclassMultipleComponent implements OnInit {
  isLight = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeMode() {
    this.isLight = !this.isLight;
  }

}
