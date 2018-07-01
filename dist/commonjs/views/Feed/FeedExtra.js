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
  name: 'SuiFeedExtra',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A feed can contain an extra content',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    images: {
      type: [Array, Boolean],
      description: 'An event can contain additional information like a set of images'
    },
    text: {
      type: Boolean,
      description: 'An event can contain additional text information'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();

    var defaultContentImage = Array.isArray(this.images) && this.images.map(function (image) {
      return h(_elements.Image, {
        attrs: { src: image }
      });
    });

    var defaultContent = [this.content, defaultContentImage];

    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.images && 'images', (this.text || this.content) && 'text', 'extra')
      }]),
      [this.$slots.default || defaultContent]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};