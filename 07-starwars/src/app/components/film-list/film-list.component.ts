import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/films.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(resp => {
      this.filmList = resp.results;
    });
  }

}
