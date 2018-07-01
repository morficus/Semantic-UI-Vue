'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _babelHelperVueJsxMergeProps = require('babel-helper-vue-jsx-merge-props');

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _escapeRegExp = require('lodash/escapeRegExp');

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

var _lib = require('../../lib');

var _PropTypes = require('../../lib/PropTypes');

var _Icon = require('../../elements/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../../elements/Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _Flag = require('../../elements/Flag/Flag');

var _Flag2 = _interopRequireDefault(_Flag);

var _Image = require('../../elements/Image/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directions = {
  auto: 'auto',
  autoUpward: 'auto-upward',
  upward: 'upward',
  downward: 'downward'
};

var animations = {
  name: 'slide',
  down: 'down',
  up: 'up'
};

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

exports.default = {
  name: 'SuiDropdown',
  mixins: [_lib.SemanticUIVueMixin],
  props: {
    allowAdditions: {
      type: Boolean,
      description: 'A dropdown can allow user additions.'
    },
    button: {
      type: Boolean,
      description: 'A dropdown button style.'
    },
    icon: {
      type: String,
      description: 'Change default button to other button.'
    },
    item: {
      type: Boolean,
      description: 'A dropdown can be formatted as a Menu item.'
    },
    floating: {
      type: Boolean,
      description: 'A dropdown menu can appear to be floating below an element.'
    },
    fluid: {
      type: Boolean,
      description: 'A dropdown can take the full width of its parent.'
    },
    labeled: {
      type: Boolean,
      description: 'A dropdown can be labeled.'
    },
    multiple: {
      type: Boolean,
      description: 'A selection dropdown can allow multiple selections.'
    },
    maxSelections: {
      type: Number,
      default: Infinity,
      description: 'Maximum possible selections when using multiple selection'
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      },
      description: 'Array of SuiDropdownItem props e.g. `{ text: \'\', value: \'\' }`'
    },
    placeholder: {
      type: String,
      description: 'Placeholder text.'
    },
    search: {
      type: Boolean,
      description: 'A dropdown can have a search field to filter options.'
    },
    selection: {
      type: Boolean,
      description: 'A dropdown can be used to select between choices in a form.'
    },
    text: {
      type: String,
      description: 'Text of dropdown'
    },
    value: {
      type: [Array, String, Number],
      description: 'Value of the dropdown.'
    },
    direction: (0, _PropTypes.Enum)(Object.values(directions), {
      default: directions.auto,
      description: 'A dropdown can have a direction to open'
    }),
    openOnFocus: {
      type: Boolean,
      default: true,
      description: 'Whether or not the menu should open when the dropdown is focused.'
    },
    closeOnBlur: {
      type: Boolean,
      default: true,
      description: 'Whether or not the menu should close when the dropdown is blurred.'
    }
  },
  events: {
    input: {
      custom: true
    }
  },
  data: function data() {
    return {
      filter: '',
      menu: null,
      open: false,
      menuDirection: null,
      focused: false,
      isMouseDown: false,
      selectedIndex: -1
    };
  },

  computed: {
    maximumValuesSelected: function maximumValuesSelected() {
      return this.multipleValue.length >= this.maxSelections;
    },
    downward: function downward() {
      if (this.direction !== directions.auto && this.direction !== directions.autoUpward) {
        return this.direction === directions.downward;
      }
      this.calculateMenuDirection();
      if (this.menuDirection === null) {
        return true;
      }

      if (this.menuDirection.below && this.menuDirection.above || !this.menuDirection.below && !this.menuDirection.above) {
        // Dropdown can or cannot fit in either direction favoring specified
        return this.direction === directions.auto;
      } else if (this.menuDirection.below) {
        // Dropdown can fit in context downward
        return true;
      }
      // Dropdown cannot fit below, opening upward
      return false;
    },
    animation: function animation() {
      return animations.name + ' ' + (this.downward ? animations.down : animations.up);
    },
    filteredOptions: function filteredOptions() {
      var _this = this;

      if (!this.search && !this.multiple) {
        return this.options;
      }
      var re = new RegExp((0, _escapeRegExp2.default)(this.filter), 'i');
      return this.options.filter(function (option) {
        if (_this.filter && !re.test(option.text)) {
          return false;
        }

        if (_this.multiple && (_this.maximumValuesSelected || _this.multipleValue.indexOf(option.value) > -1)) {
          return false;
        }

        return true;
      });
    },
    message: function message() {
      if (this.filteredOptions.length === 0) {
        if (this.multiple) {
          if (this.maximumValuesSelected) {
            return 'Max ' + this.maxSelections + ' selections';
          }
        }
        if (this.filter && !this.allowAdditions) {
          return 'No results found';
        }
      }
      return '';
    },
    menuNode: function menuNode() {
      var _this2 = this;

      var h = this.$createElement;

      return h(_DropdownMenu2.default, [this.message ? h(
        'div',
        { 'class': 'message' },
        [this.message]
      ) : this.filteredOptions.map(function (option, index) {
        return h(_DropdownItem2.default, (0, _babelHelperVueJsxMergeProps2.default)([{ props: option }, {
          attrs: {
            active: _this2.multiple ? _this2.multipleValue.indexOf(option.value) !== -1 : _this2.value === option.value,
            selected: _this2.selectedIndex === index
          },
          on: {
            'select': _this2.selectItem
          }
        }]));
      })]);
    },
    multipleValue: function multipleValue() {
      return Array.isArray(this.value) ? this.value : [];
    },
    searchNode: function searchNode() {
      var h = this.$createElement;

      return this.search && h('input', {
        attrs: {
          type: 'text',
          'aria-autocomplete': 'list',
          autoComplete: 'off',

          tabindex: '0'
        },
        'class': 'search',
        on: {
          'input': this.updateFilter,
          'keydown': this.handleSearchKeyDown
        },

        ref: 'search', domProps: {
          'value': this.filter
        }
      });
    },
    selectedNodes: function selectedNodes() {
      var _this3 = this;

      var h = this.$createElement;

      if (!this.multiple) {
        return null;
      }
      return this.multipleValue.map(function (value) {
        var existingOption = _this3.findOption(value);
        var option = _this3.allowAdditions && !existingOption ? { text: value } : existingOption;
        return h(
          _Label2.default,
          {
            nativeOn: {
              'click': _this3.handleClickOnSelectedNode
            }
          },
          [option.icon && h(_Icon2.default, {
            attrs: { name: option.icon }
          }), option.image && h(_Image2.default, { props: option.image }), option.flag && h(_Flag2.default, {
            attrs: { name: option.flag }
          }), option.text, h(_Icon2.default, {
            attrs: {
              name: 'delete'
            },
            nativeOn: {
              'click': function click() {
                return _this3.deselectItem(value);
              }
            }
          })]
        );
      });
    },
    textNode: function textNode() {
      var h = this.$createElement;

      var defaultText = this.text || this.placeholder;

      var shouldHideText = this.multiple && this.value && this.value.length || !this.multiple && [null, undefined].indexOf(this.value) === -1;
      var shouldShowSelectedItem = !this.multiple && this.open && typeof this.filteredOptions[this.selectedIndex] !== 'undefined' && this.filteredOptions[this.selectedIndex].value === this.value;

      var text = shouldHideText ? this.findOption(this.value) : defaultText;

      if (!text) {
        return null;
      }

      var className = this.classes(this.placeholder && !shouldHideText && 'default', this.filter && !shouldShowSelectedItem && 'filtered', 'text');

      var value = (typeof text === 'undefined' ? 'undefined' : (0, _typeof3.default)(text)) === 'object' ? text : { text: text };

      return h(
        'div',
        { ref: 'text', 'class': className, attrs: { role: 'alert', 'aria-live': 'polite' }
        },
        [value.icon && h(_Icon2.default, {
          attrs: { name: value.icon }
        }), value.image && h(_Image2.default, { props: value.image }), value.flag && h(_Flag2.default, {
          attrs: { name: value.flag }
        }), value.text]
      );
    }
  },
  watch: {
    filteredOptions: function filteredOptions() {
      this.updateSelectedIndex();
    },
    filter: function filter() {
      this.resizeInput();
    }
  },
  mounted: function mounted() {
    document.body.addEventListener('click', this.closeMenu);
  },
  destroyed: function destroyed() {
    document.body.removeEventListener('click', this.closeMenu);
  },

  methods: {
    setOpen: function setOpen() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.open = value;
      if (this.search && this.filteredOptions.length >= 0) {
        this.selectedIndex = 0;
      }
      if (this.menu) {
        this.menu.setOpen(value);
      }
    },
    closeMenu: function closeMenu() {
      this.setOpen(false);
    },
    deselectItem: function deselectItem(selectedValue) {
      this.$emit('input', this.multipleValue.filter(function (value) {
        return value !== selectedValue;
      }));
    },
    findOption: function findOption(value) {
      return this.options.find(function (option) {
        return option.value === value;
      });
    },
    handleMouseDown: function handleMouseDown() {
      var _this4 = this;

      this.isMouseDown = true;
      document.body.addEventListener('mouseup', function () {
        _this4.isMouseDown = false;
      }, {
        capture: true,
        once: true
      });
    },
    handleClick: function handleClick(e) {
      var _this5 = this;

      e.stopPropagation();
      if (this.open) {
        if (this.search && e.target === this.$refs.search) return;
        if (this.multiple && e.path.indexOf(this.menu.$el) !== -1) {
          this.$nextTick(function () {
            return _this5.focusSearch();
          });
          return;
        }
      }
      this.focusSearch();
      this.setOpen(!this.open);
    },
    handleFocus: function handleFocus() {
      if (this.focused) return;
      this.focused = true;
      if (!this.isMouseDown && this.openOnFocus) {
        this.setOpen(true);
      }
    },
    handleBlur: function handleBlur(e) {
      if (this.isMouseDown || e.relatedTarget === this.$refs.search) {
        return;
      }
      this.focused = false;
      if (this.open && this.closeOnBlur) {
        this.setOpen(false);
      }
    },
    handleClickOnSelectedNode: function handleClickOnSelectedNode(e) {
      e.stopPropagation();
    },
    handleKeyDown: function handleKeyDown(e) {
      if (!this.open) {
        if (e.keyCode === 40) {
          this.setOpen(true);
          e.preventDefault();
        }
        return;
      }
      var direction = 1;
      switch (e.keyCode) {
        // Handle Enter button
        case 13:
          if (this.allowAdditions && this.selectedIndex === -1 && this.filter.trim() !== '') {
            e.preventDefault();
            this.selectItem(this.filter);
          } else if (this.selection) {
            if (this.selectedIndex === -1) return;
            e.preventDefault();
            if (!this.multiple) {
              this.setOpen(false);
            } else {
              this.selectItem(this.filteredOptions[this.selectedIndex].value);
            }
          }
          return;
        // Handle escape button
        case 27:
          if (this.open) this.setOpen(false);
          return;
        // handle up arrow button
        case 38:
          direction = -1;
          break;
        case 40:
          break;
        default:
          return;
      }
      e.preventDefault();
      var newValue = this.selectedIndex + direction;
      if (this.filteredOptions.length <= newValue) {
        this.selectedIndex = 0;
      } else if (newValue < 0) {
        this.selectedIndex = this.filteredOptions.length - 1;
      } else {
        this.selectedIndex = newValue;
      }
      if (this.selection && !this.multiple) {
        this.$emit('input', this.filteredOptions[this.selectedIndex].value);
      }
    },
    register: function register(menu) {
      this.menu = menu;
    },
    selectItem: function selectItem(selectedValue) {
      if (this.multiple && this.maximumValuesSelected) return;
      var newValue = this.multiple ? this.multipleValue.filter(function (value) {
        return value !== selectedValue;
      }).concat(selectedValue) : selectedValue;
      this.$emit('input', newValue);
      this.filter = '';
      if (!this.multiple) {
        this.$nextTick(this.updateSelectedIndex);
      }
    },
    updateSelectedIndex: function updateSelectedIndex() {
      var _this6 = this;

      if (this.multiple) {
        this.selectedIndex = this.filteredOptions.length > this.selectedIndex ? this.selectedIndex : this.selectedIndex - 1;
      } else {
        this.selectedIndex = this.filteredOptions.findIndex(function (item) {
          return item.value === _this6.value;
        });
      }
    },
    resizeInput: function resizeInput() {
      var sizer = this.$refs.sizer;
      sizer.innerText = this.filter;
      sizer.style.display = 'inline';
      sizer.style.padding = '0';
      var width = sizer.offsetWidth || sizer.offsetWidth;
      sizer.style.display = '';
      sizer.style.padding = '';
      this.$refs.search.style.width = Math.ceil(width) + 1 + 'px';
    },
    updateFilter: function updateFilter(event) {
      this.filter = event.target.value;
    },
    focusSearch: function focusSearch() {
      if (this.search) this.$refs.search.focus();
    },
    handleSearchKeyDown: function handleSearchKeyDown(e) {
      if (!this.multiple || e.keyCode !== 8 || this.filter !== '') return;
      this.multipleValue.pop();
      this.$emit('input', this.multipleValue);
    },
    calculateMenuDirection: function calculateMenuDirection() {
      if (typeof window === 'undefined' || !this.menu || !this.menu.$el || !this.open) return;

      this.menu.$el.classList.add('loading');
      this.$el.classList.remove('upward');

      var c = {
        context: {
          offset: { top: 0, left: 0 },
          scrollTop: document.body.scrollTop,
          height: document.body.offsetHeight
        },
        menu: {
          offset: getOffset(this.menu.$el),
          height: this.menu.$el.offsetHeight
        }
      };
      this.menu.$el.classList.remove('loading');
      this.menuDirection = {
        above: c.menu.offset.top - c.menu.height - this.$el.clientHeight >= 0,
        below: c.menu.offset.top + c.menu.height < c.context.height
      };
    }
  },
  render: function render() {
    var h = arguments[0];

    var ElementType = this.getElementType(this.button ? 'button' : 'div');

    var eventHandlers = {
      '!mousedown': this.handleMouseDown,
      click: this.handleClick,
      '!focus': this.handleFocus,
      '!blur': this.handleBlur,
      '!keydown': this.handleKeyDown
    };
    return h(
      ElementType,
      (0, _babelHelperVueJsxMergeProps2.default)([{
        attrs: {
          role: 'listbox',
          'aria-expanded': this.open,
          tabindex: '0'
        }
      }, this.getChildPropsAndListeners(), {
        'class': this.classes('ui', this.button && 'button', this.item && 'item', this.floating && 'floating', this.fluid && 'fluid', this.labeled && 'labeled', this.multiple && 'multiple', this.selection && 'selection', this.search && 'search', this.open && 'active visible', !this.downward && directions.upward, 'dropdown')
      }, {
        on: eventHandlers,
        nativeOn: eventHandlers
      }]),
      [this.selectedNodes, this.searchNode, this.textNode, this.icon !== null && h('i', { ref: 'icon', attrs: { 'aria-hidden': 'true' },
        'class': (this.icon || 'dropdown') + ' icon' }), h('span', { 'class': 'sizer', ref: 'sizer' }), this.$slots.default || this.menuNode]
    );
  }
};