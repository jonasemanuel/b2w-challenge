"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DatabaseManager = require("../application/DatabaseManager");

var _DatabaseManager2 = _interopRequireDefault(_DatabaseManager);

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultRepository = function () {
    function DefaultRepository(modelName) {
        _classCallCheck(this, DefaultRepository);

        this.modelName = modelName;
    }

    _createClass(DefaultRepository, [{
        key: "add",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(document) {
                var _this = this;

                var database;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _DatabaseManager2.default.getConnection();

                            case 2:
                                database = _context.sent;
                                return _context.abrupt("return", new Promise(function (resolve, reject) {
                                    var collection = database.collection(_this.modelName);
                                    collection.insert(document, function (err, result) {
                                        if (!err) {
                                            resolve(result.ops);
                                        } else {
                                            reject(err);
                                        }
                                    });
                                }));

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function add(_x) {
                return _ref.apply(this, arguments);
            }

            return add;
        }()
    }, {
        key: "findAll",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                var database;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _DatabaseManager2.default.getConnection();

                            case 2:
                                database = _context2.sent;
                                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                                    var collection = database.collection(_this2.modelName);
                                    collection.find({}).toArray(function (err, result) {
                                        if (!err) {
                                            resolve(result);
                                        } else {
                                            reject(err);
                                        }
                                    });
                                }));

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function findAll() {
                return _ref2.apply(this, arguments);
            }

            return findAll;
        }()
    }, {
        key: "find",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_id) {
                var _this3 = this;

                var database;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _DatabaseManager2.default.getConnection();

                            case 2:
                                database = _context3.sent;
                                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                                    var collection = database.collection(_this3.modelName);
                                    collection.find({ _id: (0, _mongodb.ObjectId)(_id) }).toArray(function (err, result) {
                                        if (!err) {
                                            resolve(result);
                                        } else {
                                            reject(err);
                                        }
                                    });
                                }));

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function find(_x2) {
                return _ref3.apply(this, arguments);
            }

            return find;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(document) {
                var _this4 = this;

                var database;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _DatabaseManager2.default.getConnection();

                            case 2:
                                database = _context4.sent;
                                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                                    var collection = database.collection(_this4.modelName);
                                    collection.updateOne({ _id: (0, _mongodb.ObjectId)(_id) }, { $set: document }, function (err, result) {
                                        if (!err) {
                                            resolve(result);
                                        } else {
                                            reject(err);
                                        }
                                    });
                                }));

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function update(_x3) {
                return _ref4.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "remove",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_id) {
                var _this5 = this;

                var database;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _DatabaseManager2.default.getConnection();

                            case 2:
                                database = _context5.sent;
                                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                                    var collection = database.collection(_this5.modelName);
                                    collection.deleteOne({ _id: (0, _mongodb.ObjectId)(_id) }, function (err, result) {
                                        if (!err) {
                                            resolve(result);
                                        } else {
                                            reject(err);
                                        }
                                    });
                                }));

                            case 4:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function remove(_x4) {
                return _ref5.apply(this, arguments);
            }

            return remove;
        }()
    }]);

    return DefaultRepository;
}();

exports.default = DefaultRepository;
//# sourceMappingURL=DefaultRepository.js.map