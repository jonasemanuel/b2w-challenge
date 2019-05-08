'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CacheManager = function () {
    function CacheManager() {
        _classCallCheck(this, CacheManager);

        this.client = _redis2.default.createClient();
    }

    _createClass(CacheManager, [{
        key: 'setKey',
        value: function setKey(key, value) {
            this.client.set(key, value, 'EX', 86400);
        }
    }, {
        key: 'getKey',
        value: function getKey(key) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.client.get(key, function (err, value) {
                    if (!err) {
                        resolve(value);
                    } else {
                        reject(err);
                    }
                });
            });
        }
    }]);

    return CacheManager;
}();

exports.default = CacheManager;
//# sourceMappingURL=CacheManager.js.map