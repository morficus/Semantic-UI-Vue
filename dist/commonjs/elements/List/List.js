'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiList',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    divided: Boolean,
    horizontal: Boolean,
    items: Array,
    link: Boolean,
    relaxed: Boolean,
    size: _PropTypes.Enum.Size()
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();

    var children = void 0;

    if (this.items) {
      children = this.items.map(function (item) {
        return h(_ListItem2.default, [item]);
      });
    } else {
      children = this.$slots.default;
    }

    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.size, this.divided && 'divided', this.horizontal && 'horizontal', this.link && 'link', this.relaxed && 'relaxed', 'list'),
        attrs: { role: 'list'
        }
      }]),
      [children]
    );
  }
};