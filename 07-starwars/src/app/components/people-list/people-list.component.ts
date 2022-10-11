import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: People[] = [];
  numPages = 0;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeoplePage(1);
  }

  getPeoplePage(page: number) {
    this.peopleService.getPeople(page).subscribe(resp =>  {
      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

}
