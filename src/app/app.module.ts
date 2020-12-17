import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { RankingsService } from './services/rankings.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroesService } from './services/heroes.service';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [RankingsService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
