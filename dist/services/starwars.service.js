'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CacheManager = require('../application/CacheManager');

var _CacheManager2 = _interopRequireDefault(_CacheManager);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StarWarsApiService = function () {
    function StarWarsApiService() {
        _classCallCheck(this, StarWarsApiService);

        this.cacheManager = new _CacheManager2.default();
        this.API = 'https://swapi.co/api';
    }

    _createClass(StarWarsApiService, [{
        key: 'getMovieApparitionsNumber',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(planetName) {
                var cachedPlanets, planet, hasNextPage, allPlanets, request, _planets;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.cacheManager.getKey('planets');

                            case 2:
                                cachedPlanets = _context.sent;

                                if (!cachedPlanets) {
                                    _context.next = 8;
                                    break;
                                }

                                planet = JSON.parse(cachedPlanets).find(function (planet) {
                                    return planet.name == planetName;
                                });
                                return _context.abrupt('return', planet.films.length);

                            case 8:
                                hasNextPage = true;
                                allPlanets = [];

                                while (hasNextPage) {
                                    request = _axios2.default.get(this.api + '/planets/?page=1');
                                    _planets = request.data.results;

                                    allPlanets.push(_planets);
                                    hasNextPage = request.data.next;
                                }
                                this.cacheManager.setKey('planets', planets);
                                return _context.abrupt('return', allPlanets.find(function (planet) {
                                    return planet.name == planetName;
                                }));

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getMovieApparitionsNumber(_x) {
                return _ref.apply(this, arguments);
            }

            return getMovieApparitionsNumber;
        }()
    }]);

    return StarWarsApiService;
}();

exports.default = StarWarsApiService;
//# sourceMappingURL=starwars.service.js.map