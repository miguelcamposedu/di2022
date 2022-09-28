import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  name = 'Miguel';
  avatarUrl = 'https://avatars.githubusercontent.com/u/1252111?v=4';
  inputName = '';

  constructor() {}

  changeAvatar() {
      console.log(this.avatarUrl);
      if (
        this.avatarUrl == 'https://avatars.githubusercontent.com/u/1252111?v=4'
      ) {
        this.avatarUrl =
          'https://2020.allthingsopen.org/wp-content/uploads/2020/07/johnpapa-2.jpg';
      } else {
        this.avatarUrl = 'https://avatars.githubusercontent.com/u/1252111?v=4';
      }
  }
}
