import { Pokemon, PokeServiceRes, IPokemon } from './pokemon';

describe('Pokemon and PokeServiceRes', () => {

  // Test de la classe Pokemon
  it('should create a new Pokemon instance', () => {
    const pokemon = new Pokemon('1', 'Pikachu', 'https://example.com/pikachu');
    expect(pokemon).toBeTruthy();
    expect(pokemon.id).toBe('1');
    expect(pokemon.name).toBe('Pikachu');
    expect(pokemon.url).toBe('https://example.com/pikachu');
  });

  // Test de l'interface PokeServiceRes
  it('should define a valid PokeServiceRes interface', () => {
    const pokeServiceRes: PokeServiceRes = {
      count: 1,
      next: 'https://example.com/next',
      previous: null,
      results: [
        { name: 'Pikachu', url: 'https://example.com/pikachu' }
      ]
    };

    expect(pokeServiceRes.count).toBe(1);
    expect(pokeServiceRes.results.length).toBe(1);
    expect(pokeServiceRes.results[0].name).toBe('Pikachu');
    expect(pokeServiceRes.results[0].url).toBe('https://example.com/pikachu');
  });

});
