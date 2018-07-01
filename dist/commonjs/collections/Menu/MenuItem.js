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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiMenuItem',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    active: {
      type: Boolean,
      description: 'A menu item can be active.'
    },
    color: _PropTypes.Enum.Color({
      description: 'Additional colors can be specified.'
    }),
    content: {
      type: String,
      description: 'Shorthand for primary content.'
    },
    header: {
      type: Boolean,
      description: 'A menu item may include a header or may itself be a header.'
    },
    icon: {
      type: [Boolean, String],
      description: 'MenuItem can be only icon.'
    },
    link: {
      type: Boolean,
      description: 'A menu item can be link.'
    },
    position: (0, _PropTypes.Enum)(['left', 'right'], {
      description: 'A menu item can take left or right position.'
    }),
    disabled: {
      type: Boolean,
      description: 'A menu item can be disabled.'
    },
    fitted: (0, _PropTypes.Enum)(['horizontally', 'vertically'], {
      type: Boolean,
      description: 'A menu item or menu can remove element padding, vertically or horizontally..'
    })
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType(this.link ? 'a' : 'div');
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes(this.disabled && 'disabled', this.active && 'active', this.fitted, this.fitted && 'fitted', this.header && 'header', this.link && 'link', this.position, 'item')
      }]),
      [this.icon && h(_Icon2.default, {
        attrs: { name: this.icon }
      }), this.$slots.default || this.content]
    );
  },

  meta: {
    parent: 'SuiMenu'
  }
};