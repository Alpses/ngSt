import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero ;

  constructor(private hs:HeroService, private aRT:ActivatedRoute, private lc:Location ) { }

  ngOnInit() {
    this.getH();
  }

  getH(): void {
    const id = +this.aRT.snapshot.paramMap.get('id');
    this.hs.getHeroesList(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.lc.back();
  }
}
