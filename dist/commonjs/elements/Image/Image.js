'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

exports.default = {
  name: 'SuiImage',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    avatar: {
      type: Boolean,
      description: 'An image may be formatted to appear inline with text as an avatar.'
    },
    disabled: Boolean,
    hidden: Boolean,
    size: _PropTypes.Enum.Size(),
    spaced: (0, _PropTypes.Enum)(['left', 'right'], { type: Boolean }),
    shape: (0, _PropTypes.Enum)(['rounded', 'circular']),
    src: {
      type: String,
      required: true
    },
    floated: (0, _PropTypes.Enum)(['left', 'right']),
    centered: Boolean,
    wrapped: Boolean
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType('div');
    var classNames = this.classes('ui', this.avatar && 'avatar', this.size, this.shape, this.floated && this.floated + ' floated', this.centered && 'centered', this.spaced, this.spaced && 'spaced', this.hidden && 'hidden', this.disabled && 'disabled', 'image');

    if (this.wrapped) {
      return h(
        ElementType,
        { 'class': classNames },
        [h('img', {
          attrs: { src: this.src }
        })]
      );
    }

    return h('img', { 'class': classNames, attrs: { src: this.src }
    });
  }
};