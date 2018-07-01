'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiMenu',
  components: { SuiMenuItem: _MenuItem2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    activeIndex: {
      type: Number,
      description: 'Index of the currently active item.'
    },
    attached: _PropTypes.Enum.Attached({
      type: Boolean,
      description: 'A menu may be attached to other content segments.'
    }),
    color: _PropTypes.Enum.Color({
      description: 'Additional colors can be specified.'
    }),
    compact: {
      type: Boolean,
      description: 'A menu can take up only the space necessary to fit its content.'
    },
    fixed: (0, _PropTypes.Enum)(['right', 'left', 'bottom', 'top'], {
      description: 'A menu can be fixed to a side of its context.',
      type: Boolean
    }),
    icon: (0, _PropTypes.Enum)(['labeled'], {
      type: Boolean,
      description: 'A menu may have just icons (bool) or labeled icons'
    }),
    inverted: {
      type: Boolean,
      description: 'A menu may have its colors inverted to show greater contrast.'
    },
    items: {
      type: Array,
      description: 'Shorthand array of props for Menu items.'
    },
    floated: (0, _PropTypes.Enum)(['right'], {
      type: Boolean,
      description: 'A menu can be floated.'
    }),
    fluid: {
      type: Boolean,
      default: false,
      description: 'A vertical menu may take the size of its container.'
    },
    secondary: {
      type: Boolean,
      description: 'A menu can adjust its appearance to de-emphasize its contents.'
    },
    pointing: {
      type: Boolean,
      description: 'A menu can point to show its relationship to nearby content.'
    },
    tabular: (0, _PropTypes.Enum)(['right'], {
      type: Boolean,
      description: 'A menu can be formatted to show tabs of information'
    }),
    text: {
      type: Boolean,
      description: 'A menu can be formatted for text content.'
    },
    vertical: {
      type: Boolean,
      description: 'A vertical menu displays elements vertically.'
    },
    widths: _PropTypes.Enum.Number({
      description: 'A menu can have its items divided evenly.'
    }),
    borderless: {
      type: Boolean,
      default: false,
      description: 'A menu item or menu can have no borders.'
    },
    pagination: {
      type: Boolean,
      description: 'A pagination menu is specially formatted to present links to pages of content.'
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.attached && this.attached + ' attached', this.vertical && 'vertical', this.fluid && 'fluid', this.compact && 'compact', this.fixed && this.fixed + ' fixed', this.text && 'text', this.icon, this.icon && 'icon', this.inverted && 'inverted', this.pagination && 'pagination', this.borderless && 'borderless', this.floated, this.floated && 'floated', this.widths && this.num(this.widths) + ' item', this.secondary && 'secondary', this.pointing && 'pointing', this.tabular, this.tabular && 'tabular', this.color, 'menu')
      }]),
      [this.$slots.default || this.items && this.items.map(function (item, index) {
        return h(_MenuItem2.default, (0, _babelHelperVueJsxMergeProps2.default)([{ props: item }, {
          attrs: { active: item.active || _this.activeIndex === index }
        }]));
      })]
    );
  }
};