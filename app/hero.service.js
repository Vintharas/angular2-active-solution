System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HeroService = (function () {
                function HeroService(_http) {
                    this._http = _http;
                }
                HeroService.prototype.getHeroes = function () {
                    return this._http
                        .get('https://api.spotify.com/v1/search?type=track&q=finland')
                        .map(function (response) {
                        return (response.json().tracks.items.map(function (i) { return ({
                            id: i.id,
                            name: i.name,
                            imageUrl: i.album.images[0].url,
                            previewUrl: i.preview_url
                        }); }));
                    }).toPromise();
                };
                HeroService.prototype.getHero = function (id) {
                    console.log('get hero by id', id);
                    return this._http
                        .get('https://api.spotify.com/v1/search?type=track&q=finland')
                        .map(function (response) {
                        console.log('got response', response.json());
                        var track = response.json().tracks.items.find(function (i) { return i.id.includes(id); });
                        console.log('got item: ', track);
                        return {
                            id: track.id,
                            name: track.name,
                            imageUrl: track.album.images[0].url,
                            previewUrl: track.preview_url
                        };
                    }).toPromise();
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map