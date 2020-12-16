import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rankings } from '../models/rankings.model';

const apiURL = "https://api.opendota.com/api/";

@Injectable()
export class RankingsService {

  constructor(private http:HttpClient) { }

  findByHero(hero_id: number) {
    return this.http.get<Rankings>(apiURL + 'rankings?hero_id=' + hero_id);
  }
}
