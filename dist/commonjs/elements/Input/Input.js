'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _Button = require('../../elements/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../../elements/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiInput',
  components: { SuiButton: _Button2.default, SuiIcon: _Icon2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    action: String,
    disabled: Boolean,
    error: Boolean,
    focus: Boolean,
    icon: String,
    iconPosition: (0, _PropTypes.Enum)(['left', 'right']),
    inverted: Boolean,
    loading: Boolean,
    transparent: Boolean,
    value: [String, Number]
  },
  events: {
    input: {
      custom: true
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var ElementType = this.getElementType();
    var icon = void 0;
    if (this.loading || this.icon) {
      icon = h(_Icon2.default, {
        attrs: { name: this.loading ? 'loading' : this.icon }
      });
    }

    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.action && 'action', this.disabled && 'disabled', this.error && 'error', this.focus && 'focus', this.transparent && 'transparent', this.inverted && 'inverted', this.loading && 'loading', this.iconPosition === 'left' && 'left', (this.loading || this.icon) && 'icon', 'input')
      }]),
      [h('input', (0, _babelHelperVueJsxMergeProps2.default)([{
        domProps: {
          'value': this.value
        },
        on: {
          'input': function input(e) {
            return _this.$emit('input', e.target.value);
          }
        }
      }, { attrs: this.$attrs }])), icon, this.action && h(_Button2.default, {
        attrs: { content: this.action }
      })]
    );
  }
};