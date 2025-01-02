import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  public stringVar = new Subject<string>();

  getObservable(): Subject<string> {
    return this.stringVar;
  }

  public setValue(value: string) {
    this.stringVar.next(value);
  }
  
}
