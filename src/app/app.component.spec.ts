import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('AppComponent (Standalone)', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Utilisation de l'option "imports" pour inclure le composant standalone
      imports: [AppComponent],
      providers: [
        // Providers nécessaires pour les tests
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]), // Vide ici, mais à personnaliser selon vos routes
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    // Création du fixture et du composant
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
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
    // Test de l'affichage du titre dans le template
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pokedemo');
  });
});
