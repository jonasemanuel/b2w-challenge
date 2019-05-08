'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _planet = require('../routes/planet.route');

var _planet2 = _interopRequireDefault(_planet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application() {
        _classCallCheck(this, Application);

        this.app = (0, _express2.default)();
        this.router = _express2.default.Router();
        this.configuration = {
            port: 9000,
            connectionString: "mongodb+srv://root:root@maincluster-bzgfm.mongodb.net",
            databaseName: "b2wChallenge",
            applicationHostName: 'http://' + _os2.default.hostname
        };
    }

    _createClass(Application, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.app.use(_bodyParser2.default.urlencoded({ extended: true }));
            this.app.use(_bodyParser2.default.json());
            this.app.use((0, _cors2.default)());

            this.connectDatabase();
            this.loadRoutes();

            this.app.listen(process.env.PORT || this.configuration.port, function () {
                console.log('Server running on port ' + (process.env.PORT || _this.configuration.port));
            });
        }
    }, {
        key: 'loadRoutes',
        value: function loadRoutes() {
            this.app.use('/', this.router);
            (0, _planet2.default)(this.router);
        }
    }, {
        key: 'connectDatabase',
        value: function connectDatabase() {
            _mongodb.MongoClient.connect(this.configuration.connectionString, { useNewUrlParser: true }, function (err, client) {
                if (!err) {
                    console.log("MongoDB - OK");
                } else {
                    console.log(err);
                }
            });
        }
    }], [{
        key: 'getConfig',
        value: function getConfig() {
            var port = process.env.PORT || this.getConfig().port;

            if (port != 80) {
                this.configuration.applicationHostName = 'http://' + _os2.default.hostname + ':' + port;
            }

            return this.configuration;
        }
    }]);

    return Application;
}();

exports.default = Application;
//# sourceMappingURL=Application.js.map