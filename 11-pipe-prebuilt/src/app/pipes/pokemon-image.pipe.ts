import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImage'
})
export class PokemonImagePipe implements PipeTransform {

  transform(value: string): string {
    let id = value.split("/").reverse()[1];
    return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;
  }

}
