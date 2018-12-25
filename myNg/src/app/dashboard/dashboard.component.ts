import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Hero[] = [] ;
  constructor(private hS: HeroService) { }

  ngOnInit() {
    this.getHes();
  }

  getHes():void{
    this.hS.getHeroesLists()
      .subscribe(hs => this.heroes = hs.slice(1,3) );
  }
}
