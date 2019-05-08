import cron from 'node-cron';
import axios from 'axios';

import CacheManager from '../application/CacheManager';

export default class PlanetTask {
    constructor(){ 
        this.cacheManager = new CacheManager();
    }

    run() {
        let planetCacheTask = cron.schedule('* * * * *', async () => {
            var allPlanets = [];
            let endpoints = [];
            let request = await axios.get('https://swapi.co/api/planets');
            let pagesCount = (request.data.count / request.data.results.length);
        
            request.data.results.forEach(planet => allPlanets.push(planet));
        
            for(let i = 2; i <= Math.ceil(pagesCount); i++){
                endpoints.push(`https://swapi.co/api/planets/?page=${i}`);
            }
        
            for(const endpoint of endpoints){
                let request = await axios.get(endpoint);
                request.data.results.forEach(planet => {
                    allPlanets.push(planet);
                });
            }
            
            this.cacheManager.setKey('planets', JSON.stringify(allPlanets));
        });

        planetCacheTask.start();
    }
}