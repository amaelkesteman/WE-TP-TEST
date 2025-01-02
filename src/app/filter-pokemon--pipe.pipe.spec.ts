import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';

describe('FilterPokemonPipePipe', () => {
  let pipe: FilterPokemonPipePipe;

  beforeEach(() => {
    pipe = new FilterPokemonPipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same array when searchString is undefined or empty', () => {
    const pokes = [
      { name: 'Pikachu' },
      { name: 'Bulbasaur' },
      { name: 'Charmander' }
    ];

    // Test with searchString undefined
    expect(pipe.transform(pokes, 'name', undefined)).toEqual(pokes);

    // Test with searchString empty
    expect(pipe.transform(pokes, 'name', '')).toEqual(pokes);
  });

  it('should filter pokemons by name property', () => {
    const pokes = [
      { name: 'Pikachu' },
      { name: 'Bulbasaur' },
      { name: 'Charmander' }
    ];

    const result = pipe.transform(pokes, 'name', 'pika');
    expect(result).toEqual([{ name: 'Pikachu' }]);
  });

  it('should return an empty array if property is undefined', () => {
    const pokes = [
      { name: 'Pikachu' },
      { name: 'Bulbasaur' },
      { name: 'Charmander' }
    ];

    const result = pipe.transform(pokes, undefined, 'pika');
    expect(result).toEqual([]);
  });

  it('should return an empty array if searchString is not found', () => {
    const pokes = [
      { name: 'Pikachu' },
      { name: 'Bulbasaur' },
      { name: 'Charmander' }
    ];

    const result = pipe.transform(pokes, 'name', 'zapdos');
    expect(result).toEqual([]);
  });

  it('should handle case-insensitive search', () => {
    const pokes = [
      { name: 'Pikachu' },
      { name: 'Bulbasaur' },
      { name: 'Charmander' }
    ];

    const result = pipe.transform(pokes, 'name', 'piKA');
    expect(result).toEqual([{ name: 'Pikachu' }]);
  });
});
