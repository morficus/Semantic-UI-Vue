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
  name: 'SuiFeedLabel',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An event can contain an image or icon label',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    image: {
      type: String,
      description: 'An event can contain image label'
    },
    icon: {
      type: String,
      description: 'An event can contain icon label'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('label')
      }]),
      [this.$slots.default || [this.content, this.icon && h(_elements.Icon, {
        attrs: { name: this.icon }
      }), this.image && h(_elements.Image, {
        attrs: { src: this.image }
      })]]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};