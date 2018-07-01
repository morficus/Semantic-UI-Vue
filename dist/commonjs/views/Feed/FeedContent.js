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
  name: 'SuiFeedContent',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    },
    date: {
      type: String,
      description: 'Shorthand for SuiFeedDate'
    },
    summary: {
      type: String,
      description: 'Shorthand for SuiFeedSummary'
    },
    extraImages: {
      type: Array,
      description: 'Shorthand for SuiFeedExtra with images'
    },
    extraText: {
      type: String,
      description: 'Shorthand for SuiFeedExtra with text'
    },
    meta: {
      type: String,
      description: 'Shorthand for SuiFeedMeta'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('content')
      }]),
      [this.$slots.default || [this.date && h(_.FeedDate, {
        attrs: { content: this.date }
      }), this.content, this.summary && h(_.FeedSummary, {
        attrs: { content: this.summary }
      }), this.extraText && h(_.FeedExtra, {
        attrs: { text: true, content: this.extraText }
      }), this.extraImages && h(_.FeedExtra, {
        attrs: { images: this.extraImages }
      }), this.meta && h(_.FeedMeta, {
        attrs: { content: this.meta }
      })]]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};