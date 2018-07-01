'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _FeedEvent = require('./FeedEvent');

var _FeedEvent2 = _interopRequireDefault(_FeedEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiFeed',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'A feed presents user activity chronologically',
  props: {
    size: (0, _PropTypes.Enum)(['small', 'large'], {
      description: 'A feed can have different sizes (small | large)'
    }),
    events: {
      type: Array,
      description: 'Shorthand array of props for FeedEvent'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.size, 'feed')
      }]),
      [this.$slots.default || this.events && this.events.map(function (event) {
        return h(_FeedEvent2.default, { props: event });
      })]
    );
  }
};