'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

exports.default = {
  name: 'SuiItemImage',
  mixins: [_lib.SemanticUIVueMixin],
  description: 'An item can contain an image',
  props: {
    src: {
      type: String,
      required: true,
      description: 'Specifies the URL of the image'
    },
    size: (0, _PropTypes.Enum)(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], {
      type: String,
      description: 'An image may appear at different sizes (mini, tiny, small, medium, large, big, huge, massive)'
    }),
    href: {
      type: String,
      description: 'Specifies a linked document, resource, or location'
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.href ? 'a' : this.getElementType();
    return h(
      ElementType,
      {
        attrs: {
          href: this.href
        },
        'class': this.classes(this.size && 'ui ' + this.size, 'image')
      },
      [h('img', {
        attrs: { src: this.src }
      })]
    );
  },

  meta: {
    parent: 'SuiItem'
  }
};