import express from 'express';
import bodyParser from 'body-parser';

import planetRoutes from '../routes/planet.route';

export default class Application {
    constructor() { 
        this.app = express();
    }

    init() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        this.loadRoutes();

        this.app.listen(6000, () => {
            console.log(`Server running on http://localhost:6000/`);
        });
    }

    loadRoutes(){
        planetRoutes(this.app);
    }

    connectDatabase() {

    }
}