import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroes } from '../models/heroes.model';

const apiURL = "https://api.opendota.com/api/";


@Injectable()
export class HeroesService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Heroes>(apiURL + '/heroes');
  }
  
}
