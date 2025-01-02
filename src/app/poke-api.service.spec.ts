import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokeApiService } from './poke-api.service';
import { PokeServiceRes, PokeDetails } from './pokemon';

describe('PokeApiService', () => {
  let service: PokeApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeApiService]
    });

    service = TestBed.inject(PokeApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the list of pokemons', () => {
    const mockResponse: PokeServiceRes = {
      count: 1000,
      next: 'next-url',
      previous: null,
      results: [
        { name: 'bulbasaur', url: 'url-bulbasaur' },
        { name: 'ivysaur', url: 'url-ivysaur' }
      ]
    };

    service.getPokemons().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch pokemon details by id', () => {
    const mockDetails: PokeDetails = {
      abilities: [],
      base_experience: 64,
      cries: { latest: 'url', legacy: 'url' },
      forms: [],
      game_indices: [],
      height: 7,
      held_items: [],
      id: 1,
      is_default: true,
      location_area_encounters: 'url',
      moves: [],
      name: 'bulbasaur',
      order: 1,
      past_abilities: [],
      past_types: [],
      species: { name: 'bulbasaur', url: 'url' },
      sprites: {
        front_default: 'url',
        back_default: '',
        back_female: null,
        back_shiny: '',
        back_shiny_female: null,
        front_female: null,
        front_shiny: '',
        front_shiny_female: null
      },
      stats: [],
      types: [],
      weight: 69
    };

    const id = '1';

    service.getPokemonInfos(id).subscribe((data) => {
      expect(data).toEqual(mockDetails);
    });

    const req = httpMock.expectOne(service['apiUrl'] + id);
    expect(req.request.method).toBe('GET');
    req.flush(mockDetails);
  });

});
