import { Component, Input } from '@angular/core';
import { PokeDetails } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.css',
})
export class PokeDetailsComponent {

  constructor(private pokeShareInfoService: PokeShareInfoService) {

  }


  @Input('pokeDetails')
  pokeDetails: PokeDetails = {} as PokeDetails;;


  ngOnInit() {
    this.pokeShareInfoService.getObservable().subscribe((value: string) => { console.log(">"+value); });
  }

}
