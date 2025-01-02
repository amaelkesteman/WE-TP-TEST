import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokedemo';
  pokemons$ = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) {}

  // Méthode pour récupérer des pokémons via une API
  fetchPokemons() {
    this.httpClient.get<any[]>('https://api.example.com/pokemons')
      .subscribe(pokemons => {
        this.pokemons$.next(pokemons);
      });
  }
}
