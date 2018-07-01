'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiRating',
  mixins: [_lib.SemanticUIVueMixin],
  binding: {
    prop: 'rating',
    event: 'changed'
  },
  props: {
    icon: String,
    maxRating: Number,
    rating: Number
  },
  events: {
    rate: {
      custom: true
    }
  },
  data: function data() {
    return {
      selected: 0
    };
  },

  methods: {
    getCurrentValue: function getCurrentValue(evt) {
      return Number(evt.target.getAttribute('aria-posinset'));
    },
    onRate: function onRate(evt) {
      var rating = this.getCurrentValue(evt);
      this.$emit('rate', evt, (0, _extends3.default)({}, this.$props, { rating: rating }));
    },
    onMouseleave: function onMouseleave() {
      this.selected = 0;
    },
    onMouseover: function onMouseover(evt) {
      this.selected = this.getCurrentValue(evt);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.icon, 'rating'),
        attrs: { role: 'radiogroup'
        }
      }]),
      [[].concat((0, _toConsumableArray3.default)(new Array(this.maxRating))).map(function (v, i) {
        var elementValue = i + 1;
        var active = _this.rating > i;
        var selected = _this.selected > i;
        return h('i', {
          attrs: {
            'aria-checked': active.toString(),
            'aria-posinset': elementValue,
            'aria-setsize': _this.maxRating,

            tabindex: '0',
            role: 'radio'
          },
          'class': _this.classes(active && 'active', selected && 'selected', 'icon'), on: {
            'click': _this.onRate,
            'mouseover': _this.onMouseover,
            'mouseleave': _this.onMouseleave
          }
        });
      })]
    );
  }
};