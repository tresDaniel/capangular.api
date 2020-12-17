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
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [RankingsService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
