import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    template: `
<h3>Top Heroes</h3>
<div class="grid grid-pad">
    <div *ngFor="#hero of heroes" (click)="gotoDetail(hero)" class="col-1-4" >
        <div class="module hero">
            <h4>{{hero.name}}</h4>
        </div>
    </div>
</div>
    `,
   styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    public heroes: Hero[] = [];
    
    constructor(private _heroService: HeroService,
        private _router: Router){
    }
    ngOnInit(){
        this._heroService.getHeroes()
            .then(h => this.heroes = h.slice(1,5));
    }
    gotoDetail(hero: Hero){
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link); 
    }
}