'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _Icon = require('../../elements/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _MessageContent = require('./MessageContent');

var _MessageContent2 = _interopRequireDefault(_MessageContent);

var _MessageHeader = require('./MessageHeader');

var _MessageHeader2 = _interopRequireDefault(_MessageHeader);

var _MessageItem = require('./MessageItem');

var _MessageItem2 = _interopRequireDefault(_MessageItem);

var _MessageList = require('./MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiMessage',
  components: { SuiIcon: _Icon2.default, SuiMessageContent: _MessageContent2.default, SuiMessageHeader: _MessageHeader2.default, SuiMessageItem: _MessageItem2.default, SuiMessageList: _MessageList2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content.'
    },
    dismissable: {
      type: Boolean,
      description: 'A message can be dismissable'
    },
    header: {
      type: String,
      description: 'Shorthand for SuiMessageHeader.'
    },
    icon: {
      type: [Boolean, String],
      description: 'A message can contain an icon.'
    },
    list: {
      type: Array,
      description: 'Array shorthand items for the SuiMessageList'
    },
    size: (0, _PropTypes.Enum)(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'], {
      description: 'A message can have different sizes.'
    }),
    attached: (0, _PropTypes.Enum)(['bottom', 'top'], {
      type: Boolean,
      description: 'A message can be formatted to attach itself to other content.'
    }),
    color: _PropTypes.Enum.Color({
      description: 'A message can be formatted to be different colors.'
    }),
    compact: {
      type: Boolean,
      description: 'A message can only take up the width of its content.'
    },
    floating: {
      type: Boolean,
      description: 'A message can float above content that it is related to.'
    },
    info: {
      type: Boolean,
      description: 'A message may be formatted to display information.'
    },
    warning: {
      type: Boolean,
      description: 'A message may be formatted to display warning messages.'
    },
    error: {
      type: Boolean,
      description: 'A message may be formatted to display a negative message. Same as `negative`.'
    },
    negative: {
      type: Boolean,
      description: 'A message may be formatted to display a negative message. Same as `error`.'
    },
    success: {
      type: Boolean,
      description: 'A message may be formatted to display a positive message. Same as `positive`.'
    },
    positive: {
      type: Boolean,
      description: 'A message may be formatted to display a positive message. Same as `success`.'
    }
  },
  events: {
    dismiss: {
      custom: true
    }
  },
  methods: {
    handleDismiss: function handleDismiss() {
      this.$emit('dismiss');
    }
  },
  render: function render() {
    var h = arguments[0];

    var content = [this.header && h(_MessageHeader2.default, [this.header]), this.content, this.$slots.default, this.list && h(_MessageList2.default, [this.list.map(function (item) {
      return h(_MessageItem2.default, [item]);
    })])];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.color, this.size, this.floating && 'floating', this.info && 'info', this.warning && 'warning', this.success && 'success', this.positive && 'positive', this.error && 'error', this.negative && 'negative', this.attached, this.attached && 'attached', this.icon && 'icon', this.compact && 'compact', 'message')
      }]),
      [this.dismissable && h(_Icon2.default, {
        attrs: { name: 'close'
        },
        nativeOn: {
          'click': this.handleDismiss
        }
      }), this.icon && h(_Icon2.default, {
        attrs: { name: this.icon }
      }), this.icon && h(_MessageContent2.default, [content]), !this.icon && content]
    );
  }
};