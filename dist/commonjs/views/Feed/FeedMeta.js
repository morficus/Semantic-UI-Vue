'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiFeedMeta',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A feed can contain a meta',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    like: {
      type: String,
      description: 'Shorthand for SuiFeedLike'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('meta')
      }]),
      [this.$slots.default || [this.like && h(_.FeedLike, {
        attrs: { content: this.like }
      }), this.content]]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};