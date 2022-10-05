import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public pokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon`);
  }

  // TODO
  public getPokemon(id: string) {
    return this.http.get(`${API_BASE_URL}/pokemon/${id}`);
  }
}
