import { p as publicAssetsURL } from '../../renderer.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///Users/eghabash/Desktop/ISL-website/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/eghabash/Desktop/ISL-website/node_modules/vue/index.mjs';

const _imports_0 = "" + publicAssetsURL("images/purdue-seal.png");
const _sfc_main = {
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="header-bg-img flex justify-center items-center mt-[-3.9rem]"><div class="header-img-font"><div><p>${ssrInterpolate(__props.title)}</p></div></div></div><div><img class="seal-img"${ssrRenderAttr("src", _imports_0)}></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=PageHeader-6cc8daac.mjs.map
