'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiStepGroup',
  components: { SuiStep: _Step2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    ordered: Boolean,
    steps: Array,
    vertical: Boolean
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.ordered && 'ordered', this.vertical && 'vertical', 'steps')
      }]),
      [this.steps ? this.steps.map(function (props) {
        return h(_Step2.default, { props: props });
      }) : this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiStep'
  }
};