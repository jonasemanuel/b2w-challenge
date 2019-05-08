'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = require('mongodb');

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatabaseManager = function () {
    function DatabaseManager() {
        _classCallCheck(this, DatabaseManager);

        this.connection = null;
    }

    _createClass(DatabaseManager, null, [{
        key: 'getConnection',
        value: function getConnection() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (_this.connection) {
                    resolve(_this.connection);
                } else {
                    _mongodb.MongoClient.connect(_Application2.default.getConfig().connectionString, { useNewUrlParser: true }, function (err, client) {
                        _this.connection = client.db(_Application2.default.getConfig().databaseName);
                        if (!err) {
                            resolve(_this.connection);
                        } else {
                            reject(err);
                        }
                    });
                }
            });
        }
    }]);

    return DatabaseManager;
}();

exports.default = DatabaseManager;
//# sourceMappingURL=DatabaseManager.js.map