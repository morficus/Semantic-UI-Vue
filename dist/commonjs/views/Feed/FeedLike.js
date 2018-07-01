'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _elements = require('../../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiFeedLike',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A feed can contain a like element',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    icon: {
      type: String,
      description: 'Shorthand for icon. Mutually exclusive with children'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('a');
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('like')
      }]),
      [this.$slots.default || [this.icon && h(_elements.Icon, {
        attrs: { name: this.icon }
      }), this.content]]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};