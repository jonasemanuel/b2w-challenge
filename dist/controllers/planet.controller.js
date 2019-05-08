"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.remove = exports.update = exports.find = exports.create = exports.findAll = undefined;

var findAll = exports.findAll = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
        var planets;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return planetRepository.findAll();

                    case 3:
                        planets = _context.sent;

                        response.json(planets);
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);

                        response.status(500).json(_context.t0);

                    case 10:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function findAll(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var create = exports.create = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
        var planet, starWarsApiService, createdPlanet;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        planet = new _Planet2.default();

                        planet.name = request.body.name;
                        planet.climate = request.body.climate;
                        planet.terrain = request.body.terrain;
                        console.log(planet);
                        _context2.prev = 5;
                        starWarsApiService = new _starwars2.default();
                        _context2.next = 9;
                        return starWarsApiService.getMovieApparitionsNumber(planet.name);

                    case 9:
                        planet.movieApparitionsCount = _context2.sent;

                        console.log(planet.movieApparitionsCount);
                        _context2.next = 13;
                        return planetRepository.add(planet);

                    case 13:
                        createdPlanet = _context2.sent;

                        createdPlanet[0].links = [{
                            rel: 'self',
                            href: _Application2.default.getConfig().applicationHostName + "/planets/" + createdPlanet._id
                        }];

                        response.status(201).json(createdPlanet[0]);
                        _context2.next = 21;
                        break;

                    case 18:
                        _context2.prev = 18;
                        _context2.t0 = _context2["catch"](5);

                        response.status(500).json(_context2.t0);

                    case 21:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[5, 18]]);
    }));

    return function create(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var find = exports.find = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response) {
        var planet;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return planetRepository.find(request.params.id);

                    case 3:
                        planet = _context3.sent;

                        response.json(planet);
                        _context3.next = 10;
                        break;

                    case 7:
                        _context3.prev = 7;
                        _context3.t0 = _context3["catch"](0);

                        response.status(500).json(_context3.t0);

                    case 10:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 7]]);
    }));

    return function find(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var update = exports.update = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response) {
        var planet;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        planet = new _Planet2.default();
                        ENtend;
                        planet._id = request.body._id;
                        planet.itens = request.body.itens;
                        planet.total = request.body.total;
                        planet.totalResources = request.body.totalResources;
                        _context4.prev = 6;
                        _context4.next = 9;
                        return planetRepository.update(planet);

                    case 9:
                        response.status(200).end();
                        _context4.next = 15;
                        break;

                    case 12:
                        _context4.prev = 12;
                        _context4.t0 = _context4["catch"](6);

                        response.status(500).json(_context4.t0);

                    case 15:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[6, 12]]);
    }));

    return function update(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var remove = exports.remove = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, response) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return planetRepository.remove(request.params.id);

                    case 3:
                        response.status(200).end();
                        _context5.next = 9;
                        break;

                    case 6:
                        _context5.prev = 6;
                        _context5.t0 = _context5["catch"](0);

                        response.status(500).json(_context5.t0);

                    case 9:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 6]]);
    }));

    return function remove(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _PlanetRepository = require("../repositories/PlanetRepository");

var _PlanetRepository2 = _interopRequireDefault(_PlanetRepository);

var _Planet = require("../models/Planet");

var _Planet2 = _interopRequireDefault(_Planet);

var _starwars = require("../services/starwars.service");

var _starwars2 = _interopRequireDefault(_starwars);

var _os = require("os");

var _os2 = _interopRequireDefault(_os);

var _Application = require("../application/Application");

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var planetRepository = new _PlanetRepository2.default();
//# sourceMappingURL=planet.controller.js.map