import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button';
import { PokeApiService } from './poke-api.service';
import { provideHttpClient } from '@angular/common/http';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokeShareInfoService } from './poke-share-info.service';

import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokeDetailsComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    CalendarModule
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    PokeApiService,
    PokeShareInfoService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
