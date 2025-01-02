import { TestBed } from '@angular/core/testing';
import { PokeShareInfoService } from './poke-share-info.service';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

describe('PokeShareInfoService', () => {
  let service: PokeShareInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeShareInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get value via Subject', (done) => {
    const testValue = 'Test Value';

    // S'abonner à l'observable pour tester l'émission de la valeur
    service.getObservable().pipe(take(1)).subscribe(value => {
      expect(value).toBe(testValue);
      done();  // Signale que le test est terminé
    });

    // Utilisation de setValue pour émettre une valeur
    service.setValue(testValue);
  });

  it('should emit new values when setValue is called', (done) => {
    const values = ['Value 1', 'Value 2', 'Value 3'];

    let emittedValues: string[] = [];

    // S'abonner à l'observable et récupérer toutes les valeurs
    service.getObservable().subscribe(value => {
      emittedValues.push(value);

      // Vérifie si toutes les valeurs ont été émises
      if (emittedValues.length === values.length) {
        expect(emittedValues).toEqual(values);
        done();  // Signale que le test est terminé
      }
    });

    // Émettre les valeurs avec setValue
    values.forEach(value => service.setValue(value));
  });

});
