import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];  
  selectedHero:Hero;
  
  getHeroes():void{
    //Take what gets returned by getHeroes, and assign it.
    this.heroService.getHeroes().subscribe(heroesByObs => this.heroes = heroesByObs);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
