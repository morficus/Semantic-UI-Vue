'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiIcon',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    color: _PropTypes.Enum.Color(),
    disabled: Boolean,
    fitted: Boolean,
    name: {
      type: String,
      required: true
    },
    loading: Boolean,
    size: _PropTypes.Enum.Size()
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('i');
    return h(ElementType, (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
      'class': this.classes(this.color, this.name, this.size, this.disabled && 'disabled', this.fitted && 'fitted', this.loading && 'loading', 'icon')
    }]));
  }
};