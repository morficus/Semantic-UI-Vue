'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = getElementType;

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getElementType() {
  var defaultEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';

  var tag = this.$vnode && this.$vnode.data.tag;
  if (!tag) return defaultEl;

  var context = this.$vnode.context;
  var entry = Object.entries(context.$options.components || {}).find(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 1),
        name = _ref2[0];

    return (0, _kebabCase2.default)(name) === tag;
  });

  if (entry) {
    return entry[1];
  }

  return tag;
}