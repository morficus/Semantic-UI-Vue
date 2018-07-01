'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiDropdownHeader',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content.'
    },
    icon: {
      type: String,
      description: 'Shorthand for `sui-icon`.'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('header')
      }]),
      [this.icon && h(_Icon2.default, {
        attrs: { name: this.icon }
      }), this.content || this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiDropdown'
  }
};