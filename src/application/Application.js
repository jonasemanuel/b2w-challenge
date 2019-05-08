import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

import planetRoutes from '../routes/planet.route';
import CacheManager from './CacheManager';
import PlanetTask from '../tasks/PlanetTask';

export default class Application {
    constructor() { 
        this.app = express();
        this.router = express.Router();
        this.cacheManager = new CacheManager();
        dotenv.config()
    }

    init() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        
        this.connectDatabase();
        this.loadRoutes();
        this.runTasks();

        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }

    runTasks(){
        new PlanetTask().run();
    }

    loadRoutes(){
        this.app.use('/', this.router);
        planetRoutes(this.router);
    }

    connectDatabase() {
        MongoClient.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true }, (err, client) => {
            if(!err){
                console.log("MongoDB - OK");
            } else {
                console.log(err);
            }
        });
    }
}