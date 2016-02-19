import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: `app/heroes.component.html`,
    styleUrls:[`app/heroes.component.css`],
    directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit{
   public title = 'Tour of Heroes';
   public selectedHero: Hero;
   public heroes: Hero[];
    
    constructor(private _heroService: HeroService,
                private _router: Router) { }
    
        
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    } 
    getHeroes() {
        this._heroService
            .getHeroes()
            .then(h => this.heroes = h);
    } 
    ngOnInit(){
        this.getHeroes();
    }
    gotoDetail(id:number){
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}