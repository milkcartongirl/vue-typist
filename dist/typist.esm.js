//
//
//
//
//
//


var script = {

    props: {

        human: {
            type: Boolean,
            required: false,
            default: false,

        },

        typeInterval: {
            type: Number,
            required: false,
            default: 50,

        },

        pauseInterval: {
            type: Number,
            required: false,
            default: 2000,

        },

        words: {
            type: Array,
            required: true,

        }
    },


    data: function data(){

        return {

            text: "",
            index: 0

        }

    },

    mounted: function mounted(){

        if(process.client) { this.addLetter(); }

    },


    methods: {

        removeLetter: function removeLetter(){

            // this sets the text to itself but minus a letter
            this.text = this.text.slice(0, this.text.length -1);

            if (this.text.length > 0) {

                // We still have text left
                setTimeout(this.removeLetter, this.typeInterval * 0.75 );

            } else {

                // Nothing left!

                // go to the next word in the array
                // if the next word doesn't exist, we go back to the first

                this.index += 1;
                if (this.index >= this.words.length) {
                    this.index = 0;
                }

                //pause after the word is erased
                setTimeout(this.addLetter, this.pauseInterval * 0.3);
            }
        },

        addLetter: function addLetter() {

            var nextLetter = this.words[this.index][this.text.length];

            // Adds the next letter in a word
            this.text = this.text + nextLetter;

            if(this.text === this.words[this.index]){

                // We're done with the word
                this.text = this.text + ".";
                setTimeout(this.removeLetter, this.pauseInterval);

            }else{

                // We're still typing
                var humanFactor = this.human ? Math.random() * this.typeInterval * 3 : 0;
                setTimeout(this.addLetter, this.typeInterval + humanFactor);

            }

        }

    },

};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { staticClass: "typer" }, [
    _vm._v(_vm._s(_vm.text)),
    _c("span", { staticClass: "blinker" }, [_vm._v("|")])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-049c6bb1_0", { source: "@keyframes blink-data-v-049c6bb1 {\n0% {\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n.typer .blinker[data-v-049c6bb1] {\n  animation: blink-data-v-049c6bb1 infinite 500ms;\n}\n\n/*# sourceMappingURL=typist.vue.map */", map: {"version":3,"sources":["/Users/aria/Desktop/Projects/vue-starwars/src/typist.vue","typist.vue"],"names":[],"mappings":"AA2HA;AACA;IACA,WAAA;CAAA;AAEA;IACA,WAAA;CAAA;AAEA;IACA,WAAA;CAAA;CAAA;AAIA;EAKA,gDAAA;CAEA;;ACnIA,sCAAsC","file":"typist.vue","sourcesContent":[null,"@keyframes blink {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.typer .blinker {\n  animation: blink infinite 500ms; }\n\n/*# sourceMappingURL=typist.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-049c6bb1";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/aria/Desktop/Projects/vue-starwars/src/typist.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var typist = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default typist;
