import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-dart-page',
  templateUrl: './light-dart-page.component.html',
  styleUrls: ['./light-dart-page.component.css']
})
export class LightDartPageComponent implements OnInit {
  isLightMode = true;
  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeMode() {
    this.isLightMode = !this.isLightMode;
  }

  changeVisibility() {
    this.visible = !this.visible;
    }

}
