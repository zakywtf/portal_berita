"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var handleRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, callback) {
    var jres;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // let m = new model()
            jres = {
              error: 0,
              data: [],
              message: '',
              stack: {},
              errorName: ''
            };
            _context.prev = 1;
            _context.next = 4;
            return callback(req.body);

          case 4:
            jres.data = _context.sent;
            _context.next = 13;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            jres.error = 500;
            jres.message = _context.t0.message;
            jres.stack = _context.t0.stack;
            jres.errorName = _context.t0.name;

          case 13:
            res.json(jres);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function handleRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = handleRequest;