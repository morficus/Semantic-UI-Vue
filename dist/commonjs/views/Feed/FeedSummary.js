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
  name: 'SuiFeedSummary',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A feed can contain a summary',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    date: {
      type: String,
      description: 'Shorthand for SuiFeedDate'
    },
    user: {
      type: String,
      description: 'Shorthand for SuiFeedUser'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('summary')
      }]),
      [this.$slots.default || [this.user && h(_.FeedUser, {
        attrs: { content: this.user }
      }), this.content, this.date && h(_.FeedDate, {
        attrs: { content: this.date }
      })]]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};