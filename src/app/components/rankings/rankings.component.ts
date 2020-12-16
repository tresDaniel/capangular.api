import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroes } from 'src/app/models/heroes.model';
import { Ranking, Rankings } from 'src/app/models/rankings.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { RankingsService } from 'src/app/services/rankings.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  hero_id: number = 0;
  hero:any;
  heroes:Heroes[] = [];
  rankings:Ranking[] = [];

  error: boolean = false;
  errorMessage:string = '';

  constructor(private service:RankingsService, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.findAllHeroes();
  }

  onSubmit(form: NgForm){
    this.hero_id = form.value.hero_id;

    if (this.hero_id) {
      this.findByHero(this.hero_id);
      this.findHeroById(this.hero_id);
      this.error = false;
    } else {
      this.error = true;
      this.errorMessage = 'Please select a Hero';
    }
  }

  findAllHeroes() {
    this.heroesService.findAll().subscribe((response:any) => {
      this.heroes = response;
      console.log(response);
    });
  }

  findHeroById(id: number) {
    this.heroesService.findAll().subscribe((response:any) => {
      this.hero = response[id-1].localized_name;
    });
  }

  findByHero(hero_id: number){
    this.service.findByHero(hero_id).subscribe((response:any) => {
      this.rankings = response.rankings;
    });
  }

}
