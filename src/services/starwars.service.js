import CacheManager from "../application/CacheManager";

export default class StarWarsApiService {
    constructor() { 
        this.cacheManager = new CacheManager();
        this.API = 'https://swapi.co/api';
    }

    async getMovieApparitionsNumber(planetName){
        let cachedPlanets = await this.cacheManager.getKey('planets');
        let planet = JSON.parse(cachedPlanets).find(planet => planet.name == planetName);
        if(planet){
            return planet.films.length;
        } else {
            return 0;
        }
    }
}