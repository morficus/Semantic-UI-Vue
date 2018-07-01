'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiButtonOr',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    text: String
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    var attrs = {};
    if (this.text) attrs['data-text'] = this.text;
    return h(ElementType, (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), { 'class': 'or' }, { attrs: attrs }]));
  },

  meta: {
    parent: 'SuiButton'
  }
};