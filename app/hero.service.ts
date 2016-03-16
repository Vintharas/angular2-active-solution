import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class HeroService{
    constructor(private _http: Http){
    }
    getHeroes(){
        return this._http
          .get('https://api.spotify.com/v1/search?type=track&q=finland')
          .map((response:Response) => {
            return <Hero[]>(response.json().tracks.items.map(i => ({
              id: i.id,
              name: i.name,
              imageUrl: i.album.images[0].url,
              previewUrl: i.preview_url
            })))
          }).toPromise();
    }
    getHero(id){
        console.log('get hero by id', id);
        return this._http
          .get('https://api.spotify.com/v1/search?type=track&q=finland')
          .map((response:Response) => {
            console.log('got response', response.json());
            var track = response.json().tracks.items.find(i => i.id.includes(id));
            console.log('got item: ', track);
            return {
              id: <string>track.id,
              name: <string>track.name,
              imageUrl: <string>track.album.images[0].url,
              previewUrl: <string>track.preview_url
            };
          }).toPromise();
    }
}
