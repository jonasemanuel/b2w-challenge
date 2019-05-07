import * as planetController from '../controllers/planet.controller';

const planetRoutes = (router) => {
    let routePrefix = '/planets';
    
    router.route(routePrefix).get(planetController.findAll)
    router.route(routePrefix).put(planetController.update)
    router.route(routePrefix).post(planetController.create);
    router.route(`${routePrefix}/:id`).get(planetController.find)
    router.route(`${routePrefix}/:id`).delete(planetController.remove);
}

export default planetRoutes;