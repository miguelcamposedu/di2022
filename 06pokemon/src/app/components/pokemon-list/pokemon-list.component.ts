import { Component, OnInit } from '@angular/core';
import { PokemonInfoDialogComponent } from 'src/app/dialogs/pokemon-info-dialog/pokemon-info-dialog.component';
import { PokemonDetailResponse } from 'src/app/interfaces/pokemon-detail-response.interface';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];
  pokemonSelected: PokemonDetailResponse | undefined;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    });
  }

  getPhotoUrl(pokemon: Pokemon) {
    // https://pokeapi.co/api/v2/pokemon/2/
    let id = pokemon.url.split("/").reverse()[1];
    debugger;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getPokemonInfo(pokemon: Pokemon) {
    this.pokemonService.getPokemonDetail(pokemon).subscribe(response => {
      this.pokemonSelected = response;
      this.dialog.open(PokemonInfoDialogComponent, {
        data: {
          pokemonInfo: this.pokemonSelected,
          color: '#FF0000'
        },
      });
    });
  }
}
