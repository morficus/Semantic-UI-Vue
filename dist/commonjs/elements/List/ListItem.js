'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _ListIcon = require('./ListIcon');

var _ListIcon2 = _interopRequireDefault(_ListIcon);

var _ListContent = require('./ListContent');

var _ListContent2 = _interopRequireDefault(_ListContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiListItem',
  components: { SuiListContent: _ListContent2.default, SuiListIcon: _ListIcon2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    content: String,
    icon: String
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), { 'class': 'item', attrs: { role: 'listitem' }
      }]),
      [this.icon && h(_ListIcon2.default, {
        attrs: { name: this.icon }
      }), this.content ? h(_ListContent2.default, [this.content]) : this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiList'
  }
};