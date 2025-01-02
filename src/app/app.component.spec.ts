import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AppComponent (Standalone)', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Utilisation de l'option "imports" pour inclure le composant standalone
      imports: [AppComponent],
      providers: [
        // Providers nécessaires pour les tests
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    // Création du fixture et du composant
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // Détecte les changements dans le DOM
  });

  it('should create the app', () => {
    // Test de création du composant
    expect(component).toBeTruthy();
  });

  it(`should have as title 'pokedemo'`, () => {
    // Test de la valeur du titre
    expect(component.title).toEqual('pokedemo');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pokedemo');
  });

  it('should fetch and display pokemons', () => {
    // Simule la récupération des pokémons
    const mockPokemons = [{ name: 'Pikachu' }, { name: 'Bulbasaur' }, { name: 'Charmander' }];

    // Appel de la méthode qui va faire une requête HTTP
    component.fetchPokemons();

    // Vérification de la requête HTTP émise
    const req = httpMock.expectOne('https://api.example.com/pokemons');
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemons);  // Envoi de la réponse simulée avec les pokémons fictifs

    // Vérifie que la propriété 'pokemons$' a bien été mise à jour
    component.pokemons$.subscribe(pokemons => {
      expect(pokemons.length).toBe(3);
      expect(pokemons[0].name).toBe('Pikachu');
    });

    // Vérifie qu'il n'y a pas d'autres requêtes HTTP non résolues
    httpMock.verify();
  });

  afterEach(() => {
    // Vérifie qu'il n'y a pas de requêtes HTTP non résolues
    httpMock.verify();
  });
});
