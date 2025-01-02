import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { MatButtonModule } from '@angular/material/button';
import { PokeApiService } from './poke-api.service';
import { provideHttpClient } from '@angular/common/http';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokeShareInfoService } from './poke-share-info.service';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    CalendarModule,
    FilterPokemonPipePipe,
    MyComponentComponent,
    PokeDetailsComponent,
  ],
  providers: [
    provideHttpClient(),
    PokeApiService,
    PokeShareInfoService
  ]
})
export class AppModule { }
