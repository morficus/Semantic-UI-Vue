'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _StepDescription = require('./StepDescription');

var _StepDescription2 = _interopRequireDefault(_StepDescription);

var _StepTitle = require('./StepTitle');

var _StepTitle2 = _interopRequireDefault(_StepTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiStepContent',
  components: { SuiStepDescription: _StepDescription2.default, SuiStepTitle: _StepTitle2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    description: String,
    title: String
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), { 'class': 'content' }]),
      [this.title && h(_StepTitle2.default, [this.title]), this.description && h(_StepDescription2.default, [this.description]), this.$slots.default]
    );
  },

  meta: {
    parent: 'SuiStep'
  }
};