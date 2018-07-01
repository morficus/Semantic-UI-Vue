'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _Flag = require('../../elements/Flag/Flag');

var _Flag2 = _interopRequireDefault(_Flag);

var _Image = require('../../elements/Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Icon = require('../../elements/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiDropdownItem',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    flag: {
      type: String,
      description: 'Shorthand for sui-flag.'
    },
    image: {
      type: Object,
      description: 'Shorthand for sui-image.'
    },
    icon: {
      type: String,
      description: 'Shorthand for sui-icon.'
    },
    text: {
      type: String,
      description: 'Display text.'
    },
    value: {
      type: [String, Number],
      description: 'Stored value.'
    },
    active: {
      type: Boolean,
      default: false,
      description: 'Style as the currently chosen item.'
    },
    selected: {
      type: Boolean,
      default: false,
      description: 'Is item selected'
    },
    disabled: {
      type: Boolean,
      default: false,
      description: 'A dropdown item can be disabled.'
    }
  },
  events: {
    select: {
      custom: true
    }
  },
  methods: {
    select: function select() {
      this.$emit('select', this.value);
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        attrs: {
          role: 'option'
        },
        'class': this.classes(this.disabled && 'disabled', this.active && 'active', this.selected && 'selected', 'item'),
        on: {
          'click': this.select
        }
      }]),
      [this.icon && h(_Icon2.default, {
        attrs: { name: this.icon }
      }), this.image && h(_Image2.default, { props: this.image }), this.flag && h(_Flag2.default, {
        attrs: { name: this.flag }
      }), this.text || this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiDropdown'
  }
};