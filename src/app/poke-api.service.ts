import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetails, PokeServiceRes } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';


  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(this.apiUrl);
  }

  getPokemonInfos(id: string): Observable<PokeDetails> {
    return this.http.get<PokeDetails>(this.apiUrl + id);
  }
}
