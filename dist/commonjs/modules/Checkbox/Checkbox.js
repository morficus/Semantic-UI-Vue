'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiCheckbox',
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    disabled: Boolean,
    inputValue: [Array, Boolean, Number, String],
    label: String,
    radio: Boolean,
    toggle: Boolean,
    name: String,
    value: String
  },
  events: {
    change: {
      custom: true
    }
  },
  computed: {
    isArray: function isArray() {
      return Array.isArray(this.inputValue);
    },
    isChecked: function isChecked() {
      if (this.radio && this.value) {
        return this.inputValue === this.value;
      }

      if (this.isArray) {
        return this.inputValue.includes(this.value);
      }

      return !!this.inputValue;
    }
  },
  methods: {
    setValue: function setValue(e) {
      var _this = this;

      var checked = e.target.checked;

      if (this.radio && this.value) {
        this.$emit('change', this.value);
      } else if (this.isArray) {
        if (checked) {
          this.$emit('change', this.inputValue.concat([this.value]));
        } else {
          this.$emit('change', this.inputValue.filter(function (v) {
            return v !== _this.value;
          }));
        }
      } else {
        this.$emit('change', checked);
      }
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', !(this.label || this.$slots.default) && 'fitted', this.radio && 'radio', this.toggle && 'toggle', this.disabled && 'disabled', 'checkbox')
      }]),
      [h('input', {
        ref: 'input',
        'class': 'hidden',
        attrs: { readonly: '',
          tabiindex: '0',
          name: this.name,
          type: this.radio ? 'radio' : 'checkbox'
        },
        domProps: {
          'checked': this.isChecked
        },
        on: {
          'change': this.setValue
        }
      }), h(
        'label',
        {
          on: {
            'click': function click() {
              return _this2.$refs.input.click();
            }
          },
          attrs: {
            'for': this.name }
        },
        [this.label || this.$slots.default]
      )]
    );
  }
};