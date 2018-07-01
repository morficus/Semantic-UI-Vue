'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _events; /**
              * Code taken form https://github.com/David-Desmaisons/Vue-Semantic-Modal
              * Thanks to [David Desmaisons](https://github.com/David-Desmaisons)
              */


var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _Icon = require('../../elements/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visualStates = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing'
};

var changedEvent = 'changed';

function animationWithDirections(animation) {
  return [animation + ' up', animation + ' down', animation + ' left', animation + ' right'];
}

var animations = ['scale', 'drop', 'horizontal flip', 'vertical flip', 'fade'].concat((0, _toConsumableArray3.default)(animationWithDirections('fade')), (0, _toConsumableArray3.default)(animationWithDirections('fly')), (0, _toConsumableArray3.default)(animationWithDirections('swing')));

function buildAnimation(name, direction) {
  return 'animating ' + name + ' ' + (direction ? 'in' : 'out');
}

function buildClass(visualState, animation) {
  switch (visualState) {
    case visualStates.opening:
      return buildAnimation(animation, true);
    case visualStates.open:
      return 'visible active';
    case visualStates.closing:
      return 'visible active ' + buildAnimation(animation, false);
    case visualStates.close:
      return 'hidden';
    default:
      return '';
  }
}

exports.default = {
  name: 'SuiModal',
  model: {
    prop: 'open',
    event: changedEvent
  },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    animation: (0, _PropTypes.Enum)(animations, {
      default: animations[0]
    }),
    animationDuration: {
      type: Number,
      default: 500
    },
    aligned: (0, _PropTypes.Enum)(['top']),
    closeIcon: {
      type: Boolean,
      default: false
    },
    dimmer: (0, _PropTypes.Enum)(['inverted']),
    image: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    size: (0, _PropTypes.Enum)(['standart', 'fullscreen', 'small', 'large', 'mini', 'tiny'], {
      default: 'standart'
    }),
    basic: {
      type: Boolean
    },
    closable: {
      type: Boolean,
      default: true
    }
  },
  events: (_events = {
    displayChanged: {
      custom: true
    }
  }, (0, _defineProperty3.default)(_events, changedEvent, {
    custom: true
  }), (0, _defineProperty3.default)(_events, 'clickAwayModal', {
    custom: true
  }), _events),
  data: function data() {
    return {
      visualState: this.open ? visualStates.open : visualStates.closed
    };
  },

  computed: {
    dimmerClass: function dimmerClass() {
      return buildClass(this.visualState, 'fade');
    },
    modalClass: function modalClass() {
      return buildClass(this.visualState, this.animation);
    },
    visible: function visible() {
      return this.visualState !== visualStates.closed;
    },
    dimmerStyle: function dimmerStyle() {
      return {
        display: this.visible ? 'flex !important' : 'none !important',
        animationDuration: this.animationDuration + 'ms'
      };
    },
    modalStyle: function modalStyle() {
      return {
        display: this.visible ? 'block !important' : 'none !important',
        animationDuration: this.animationDuration + 'ms'
      };
    }
  },
  watch: {
    open: function open(newValue) {
      this.visualState = newValue ? visualStates.opening : visualStates.closing;
    },
    visualState: function visualState(newValue) {
      this.$emit('displayChanged', newValue);
    }
  },
  mounted: function mounted() {
    this.$el.addEventListener((0, _lib.getEventAnimationEnd)(), this.onAnimationEnd, true);
  },
  beforeDestroy: function beforeDestroy() {
    this.$el.removeEventListener((0, _lib.getEventAnimationEnd)(), this.onAnimationEnd, true);
  },

  methods: {
    close: function close() {
      this.$emit(changedEvent, false);
    },
    dimmerClick: function dimmerClick(event) {
      if (this.closable && event.target === event.currentTarget && this.visualState === visualStates.open) {
        this.$emit('clickAwayModal');
        this.close();
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      this.visualState = this.open ? visualStates.open : visualStates.closed;
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    return h(
      'div',
      {
        ref: 'dimmer',
        'class': this.classes('ui', this.dimmer, 'dimmer modals page transition', this.dimmerClass),
        style: this.dimmerStyle, on: {
          'click': this.dimmerClick
        }
      },
      [h(
        'div',
        {
          ref: 'modal',
          style: this.modalStyle,
          'class': this.classes('ui', this.size, this.basic && 'basic', this.aligned && this.aligned + ' aligned', 'modal', 'transition', this.modalClass)
        },
        [this.closeIcon && h(_Icon2.default, {
          attrs: { name: 'close' },
          nativeOn: {
            'click': function click() {
              return _this.close();
            }
          }
        }), this.$slots.default]
      )]
    );
  }
};