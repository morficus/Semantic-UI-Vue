'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _StepContent = require('./StepContent');

var _StepContent2 = _interopRequireDefault(_StepContent);

var _StepTitle = require('./StepTitle');

var _StepTitle2 = _interopRequireDefault(_StepTitle);

var _StepDescription = require('./StepDescription');

var _StepDescription2 = _interopRequireDefault(_StepDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiStep',
  components: { SuiIcon: _Icon2.default, SuiStepContent: _StepContent2.default, SuiStepTitle: _StepTitle2.default, SuiStepDescription: _StepDescription2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    active: Boolean,
    completed: Boolean,
    description: String,
    disabled: Boolean,
    icon: String,
    title: String
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.active && 'active', this.completed && 'completed', this.disabled && 'disabled', 'step')
      }]),
      [this.icon && h(_Icon2.default, {
        attrs: { name: this.icon }
      }), this.title || this.description ? h(_StepContent2.default, [this.title && h(_StepTitle2.default, [this.title]), this.description && h(_StepDescription2.default, [this.description])]) : this.$slots.default]
    );
  }
};