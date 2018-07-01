'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _lib = require('../../lib');

var _BreadcrumbSection = require('./BreadcrumbSection');

var _BreadcrumbSection2 = _interopRequireDefault(_BreadcrumbSection);

var _BreadcrumbDivider = require('./BreadcrumbDivider');

var _BreadcrumbDivider2 = _interopRequireDefault(_BreadcrumbDivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SuiBreadcrumb',
  components: { SuiBreadcrumbDivider: _BreadcrumbDivider2.default, SuiBreadcrumbSection: _BreadcrumbSection2.default },
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    icon: String,
    sections: Array
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var ElementType = this.getElementType();
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([this.getChildPropsAndListeners(), {
        'class': this.classes('ui', 'breadcrumb')
      }]),
      [this.$slots.default || this.sections.map(function (_ref, index) {
        var active = _ref.active,
            content = _ref.content,
            key = _ref.key,
            link = _ref.link;

        var sectionEl = h(
          _BreadcrumbSection2.default,
          { key: key, attrs: { active: active, link: link }
          },
          [content]
        );

        if (index === 0) return sectionEl;

        return [' ', h(_BreadcrumbDivider2.default, {
          attrs: { icon: _this.icon }
        }), ' ', sectionEl];
      })]
    );
  }
};