'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiButton',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    active: {
      type: Boolean,
      description: 'A button can show it is currently the active user selection.'
    },
    animated: (0, _PropTypes.Enum)(['fade', 'vertical'], {
      type: Boolean,
      description: 'A button can animate to show hidden content.'
    }),
    attached: (0, _PropTypes.Enum)(['left', 'right', 'top', 'bottom'], {
      description: 'A button can be attached to the top or bottom of other content.'
    }),
    basic: {
      type: Boolean,
      description: 'A basic button is less pronounced.'
    },
    circular: {
      type: Boolean,
      description: 'A button can be circular.'
    },
    className: {
      type: String,
      description: 'Additional classes.'
    },
    color: _PropTypes.Enum.Color(),
    compact: {
      type: Boolean,
      description: 'A button can reduce its padding to fit into tighter spaces.'
    },
    content: {
      type: String,
      description: 'Shorthand for primary content.'
    },
    disabled: {
      type: Boolean,
      description: 'A button can show it is currently unable to be interacted with.'
    },
    floated: (0, _PropTypes.Enum)(['left', 'right'], {
      description: 'A button can be aligned to the left or right of its container.'
    }),
    fluid: {
      type: Boolean,
      description: 'A button can take the width of its container.'
    },
    icon: String,
    inverted: {
      type: Boolean,
      description: 'A button can be formatted to appear on dark backgrounds.'
    },
    // label: {
    //   type: String,
    //   description: 'Add a Label by text, props object, or pass a <Label />.',
    // },
    labelPosition: (0, _PropTypes.Enum)(['left', 'right'], {
      description: 'A labeled button can format a Label or Icon to appear on the left or right.'
    }),
    loading: {
      type: Boolean,
      description: 'A button can show a loading indicator.'
    },
    negative: {
      type: Boolean,
      description: 'A button can hint towards a negative consequence.'
    },
    positive: {
      type: Boolean,
      description: 'A button can hint towards a positive consequence.'
    },
    primary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.'
    },
    secondary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.'
    },
    size: _PropTypes.Enum.Size(),
    tabIndex: {
      type: [Number, String],
      description: 'A button can receive focus.'
    },
    toggle: { // TODO: Add props and functional for toggle buttons
      type: Boolean,
      description: 'A button can be formatted to toggle on and off.'
    },
    social: _PropTypes.Enum.Social()
  },
  events: {
    click: {
      description: 'Click event passed to the button'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('button');

    var label = this.$slots.label;

    var classList = this.classes('ui', this.active && 'active', this.attached && this.attached + ' attached', this.animated, this.animated && 'animated', this.basic && 'basic', this.circular && 'circular', this.className, this.color, this.compact && 'compact', this.disabled && 'disabled', this.floated && this.floated + ' floated', this.fluid && 'fluid', this.icon && !(this.content || this.$slots.default) && 'icon', !label && this.icon && this.labelPosition && 'icon', this.inverted && 'inverted', !label && this.labelPosition && this.labelPosition, !label && this.labelPosition && 'labeled', this.loading && 'loading', this.negative && 'negative', this.positive && 'positive', this.primary && 'primary', this.secondary && 'secondary', this.social, this.size, 'button');

    var button = h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': classList,
        attrs: { role: 'button'
        }
      }]),
      [this.icon && h(_Icon2.default, {
        attrs: { name: this.icon }
      }), this.content || this.$slots.default]
    );

    if (label) {
      return h(
        'div',
        { 'class': this.classes('ui', this.labelPosition, 'labeled', 'button') },
        [this.labelPosition === 'left' && label, button, this.labelPosition !== 'left' && label]
      );
    }
    return button;
  }
};