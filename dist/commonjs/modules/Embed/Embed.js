'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _elements = require('../../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiEmbed',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    active: {
      type: Boolean,
      description: 'An embed can be active'
    },
    aspectRatio: (0, _PropTypes.Enum)(['4:3', '16:9', '21:9'], {
      description: 'An embed can specify an alternative aspect ratio (4:3 | 16:9 | 21:9)'
    }),
    icon: {
      type: String,
      description: 'Specifies an icon to use with placeholder content',
      default: 'video play'
    },
    placeholder: {
      type: String,
      description: 'A placeholder image for embed'
    },
    source: (0, _PropTypes.Enum)(['youtube', 'vimeo'], {
      description: 'Specifies a source to use. Cannot be used together with url'
    }),
    url: {
      type: String,
      description: 'Specifies a url to use for embed. Cannot be used together with source'
    },
    autoplay: {
      type: Boolean,
      description: 'Setting to true or false will force autoplay',
      default: true
    },
    brandedUI: {
      type: Boolean,
      description: 'Whether to show networks branded UI like title cards, or after video calls to action'
    },
    color: {
      type: String,
      description: 'Specifies what default chrome color with Vimeo or YouTube',
      default: '#444444'
    },
    hd: {
      type: Boolean,
      description: 'Specifies whether to display YouTuber/Vimeo video in high-definition',
      default: true
    },
    id: {
      type: String,
      description: 'Specifies an id for source'
    },
    iframe: {
      type: Object,
      description: 'Shorthand for HTML iframe'
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },

  computed: {
    isActiveState: function isActiveState() {
      return this.active || this.isActive;
    }
  },
  methods: {
    setActive: function setActive() {
      this.isActive = true;
    }
  },
  render: function render() {
    var h = arguments[0];

    var self = this;
    function getSrc() {
      var source = !self.url && self.source;
      var url = !self.source && self.url;
      var autoplay = source && self.autoplay;
      var brandedUI = source && self.brandedUI;
      var color = source && self.color;
      var hd = source && self.hd;
      var id = source && self.id;

      if (source === 'youtube') {
        return ['//www.youtube.com/embed/' + id, '?autohide=true', '&amp;autoplay=' + autoplay, '&amp;color=' + encodeURIComponent(color), '&amp;hq=' + hd, '&amp;jsapi=false', '&amp;modestbranding=' + brandedUI].join('');
      }

      if (source === 'vimeo') {
        return ['//player.vimeo.com/video/' + id, '?api=false', '&amp;autoplay=' + autoplay, '&amp;byline=false', '&amp;color=' + encodeURIComponent(color), '&amp;portrait=false', '&amp;title=false'].join('');
      }

      return url;
    }

    function getStyleString(styleObj) {
      return Object.entries(styleObj).reduce(function (styleString, entry) {
        return '' + styleString + entry[0] + ':' + entry[1] + ';';
      }, '');
    }

    function renderEmbed() {
      if (!self.isActiveState) return null;
      if (self.$slots.default) return self.$slots.default;
      var iframe = self.iframe || {};
      var embedSrc = getSrc();
      var style = iframe.style ? getStyleString(iframe.style) : '';
      return h(
        'div',
        { 'class': 'embed' },
        [h('iframe', {
          attrs: { src: iframe.src || embedSrc,
            allowFullScreen: iframe.allowFullScreen || false,
            frameBorder: iframe.frameBorder || 0,
            width: iframe.width || '100%',
            height: iframe.height || '100%',
            scrolling: iframe.scrolling || 'no',
            title: iframe.title || 'Embedded content from ' + (self.source || 'custom host')
          },
          style: style
        })]
      );
    }

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([{
        on: {
          'click': this.setActive
        }
      }, this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.aspectRatio, this.isActiveState && 'active', 'embed')
      }]),
      [this.icon && h(_elements.Icon, {
        attrs: { name: this.icon }
      }), this.placeholder && h('img', { 'class': 'placeholder', attrs: { src: this.placeholder }
      }), renderEmbed()]
    );
  }
};