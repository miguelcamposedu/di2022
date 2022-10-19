import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-pipe',
  templateUrl: './sample-pipe.component.html',
  styleUrls: ['./sample-pipe.component.css']
})
export class SamplePipeComponent implements OnInit {
  fecha = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
