'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _planet = require('../controllers/planet.controller');

var planetController = _interopRequireWildcard(_planet);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var planetRoutes = function planetRoutes(router) {
    var routePrefix = '/planets';

    router.route(routePrefix).get(planetController.findAll);
    router.route(routePrefix).put(planetController.update);
    router.route(routePrefix).post(planetController.create);
    router.route(routePrefix + '/:id').get(planetController.find);
    router.route(routePrefix + '/:id').delete(planetController.remove);
};

exports.default = planetRoutes;
//# sourceMappingURL=planet.route.js.map