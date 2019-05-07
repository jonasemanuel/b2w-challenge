import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import cors from 'cors';

import orderRoute from '../routes/order.route';
import resourceRoutes from '../routes/planet.route';

export default class Application {
    constructor() { 
        this.app = express();
        this.router = express.Router();
    }

    init() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        
        this.connectDatabase();
        this.loadRoutes();

        this.app.listen(process.env.PORT || this.getConfig().port, () => {
            console.log(`Server running on port ${this.getConfig().port}`);
        });
    }

    loadRoutes(){
        this.app.use('/api', this.router);
        resourceRoutes(this.router);
        orderRoute(this.router);
    }

    connectDatabase() {
        MongoClient.connect(this.getConfig().connectionString, { useNewUrlParser: true }, (err, client) => {
            if(!err){
                console.log("MongoDB - OK");
            } else {
                console.log(err);
            }
        });
    }

    static getConfig() {
        return {
            port: 9000,
            connectionString: "mongodb+srv://root:root@maincluster-bzgfm.mongodb.net",
            databaseName: "b2wChallenge"
        }
    }
}