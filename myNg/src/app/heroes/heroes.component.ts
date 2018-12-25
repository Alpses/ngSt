import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes:Hero[] ;
  // public selectedHero: Hero;
  constructor(private HS:HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(her:Hero){
  //   this.selectedHero = her ;
  // }

  getHeroes():void{
    // console.log([this.HS,this.HS.getHeroesList()]);
    this.HS.getHeroesLists().subscribe(hrs => this.heroes = hrs)
  }
}
