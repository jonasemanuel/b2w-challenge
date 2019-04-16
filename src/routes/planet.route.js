import * as planetController from '../controllers/planet.controller';

const planetRoutes = (app) => {
    app.get('/planet', planetController.getAll);
}

export default planetRoutes;