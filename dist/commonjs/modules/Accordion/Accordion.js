'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiAccordion',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    activeIndex: [Number, Array],
    exclusive: Boolean,
    fluid: Boolean,
    inverted: Boolean,
    panels: Array,
    styled: Boolean
  },
  data: function data() {
    var active = void 0;

    if (this.exclusive) {
      if (Array.isArray(this.activeIndex)) {
        active = this.activeIndex[0];
      } else {
        active = this.activeIndex;
      }
    } else if (!Array.isArray(this.activeIndex)) {
      active = [this.activeIndex];
    } else {
      active = this.activeIndex;
    }

    return {
      active: active,
      panelElms: []
    };
  },

  methods: {
    register: function register(el) {
      var _this = this;

      var panelIndex = -1;
      var found = void 0;

      var walkChildren = function walkChildren(children) {
        children.some(function (child) {
          if (child.$options.name === 'SuiAccordion') return false;
          if (child.$options.name === 'SuiAccordionTitle') panelIndex += 1;
          if (child === el) {
            _this.panelElms[panelIndex] = (0, _extends4.default)({}, _this.panelElms[panelIndex] || {}, (0, _defineProperty3.default)({}, child.$options.name, child));

            found = true;
            return true;
          }

          walkChildren(child.$children);
          return found;
        });
      };

      walkChildren(this.$children);
    },
    toggleEl: function toggleEl(el) {
      var _this2 = this;

      this.panelElms.some(function (panel, index) {
        if (panel.SuiAccordionTitle === el || panel.SuiAccordionContent === el) {
          _this2.toggle(index);
          return true;
        }
        return false;
      });
    },
    toggle: function toggle(index) {
      if (this.exclusive) {
        if (this.active === index) this.active = null;else this.active = index;
      } else if (this.active.includes(index)) {
        this.active = this.active.filter(function (i) {
          return i !== index;
        });
      } else {
        this.active = this.active.concat([index]);
      }

      if (this.panelElms) this.toggleChildren();
    },
    toggleChildren: function toggleChildren() {
      var _this3 = this;

      this.panelElms.forEach(function (panel, i) {
        var active = _this3.isPanelActive(i);
        if (panel.SuiAccordionTitle) {
          panel.SuiAccordionTitle.setActive(active);
        }
        if (panel.SuiAccordionContent) {
          panel.SuiAccordionContent.setActive(active);
        }
      });
    },
    isPanelActive: function isPanelActive(index) {
      if (Array.isArray(this.active)) {
        return this.active.includes(index);
      }
      return this.active === index;
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.inverted && 'inverted', this.styled && 'styled', 'accordion')
      }]),
      [this.panels ? this.panels.map(function (_ref, index) {
        var title = _ref.title,
            content = _ref.content;
        return h('template', [h(
          'div',
          {
            'class': _this4.classes('title', _this4.isPanelActive(index) && 'active'),
            on: {
              'click': function click() {
                return _this4.toggle(index);
              }
            }
          },
          [title]
        ), h(
          'div',
          { 'class': _this4.classes('content', _this4.isPanelActive(index) && 'active') },
          [content]
        )]);
      }) : this.$slots.default]
    );
  }
};