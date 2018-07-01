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
  name: 'SuiFeedEvent',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A feed contains an event',
  props: {
    content: {
      type: String,
      description: 'Shorthand for SuiFeedContent'
    },
    image: {
      type: String,
      description: 'An event can contain image label'
    },
    icon: {
      type: String,
      description: 'An event can contain icon label'
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
    var hasContent = this.content || this.date || this.summary || this.extraImages || this.extraText || this.meta;
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('event')
      }]),
      [this.image && h(_.FeedLabel, {
        attrs: { image: this.image }
      }), this.icon && h(_.FeedLabel, {
        attrs: { icon: this.icon }
      }), hasContent && h(_.FeedContent, {
        attrs: {
          content: this.content,
          date: this.date,
          summary: this.summary,
          extraImages: this.extraImages,
          extraText: this.extraText,
          meta: this.meta
        }
      }), this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiFeed'
  }
};