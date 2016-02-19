import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    getHero(id){
        return Promise.resolve(HEROES.find(h => h.id === id))
    }
}