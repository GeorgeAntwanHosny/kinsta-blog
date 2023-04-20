import { _ as _export_sfc, K as KinstaLayout } from "./KinstaLayout-48d2c2b1.mjs";
import { Head } from "@inertiajs/inertia-vue3";
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  name: "Show",
  components: {
    "KinstaLayout": KinstaLayout,
    "Head": Head
  },
  props: {
    article: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_KinstaLayout = resolveComponent("KinstaLayout");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Kinsta Blog Details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<meta name="description" content="Kinsta blog  details for developers"${_scopeId}>`);
      } else {
        return [
          createVNode("meta", {
            name: "description",
            content: "Kinsta blog  details for developers"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KinstaLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<article class="mx-auto mt-10 flex justify-center max-w-5xl border-b-2"${_scopeId}><img${ssrRenderAttr("src", this.article.image_url)} class="w-80 h-80 rounded-xl mx-auto py-5" alt=""${_scopeId}><div class="text-left flex flex-col pt-5 pb-10 px-10"${_scopeId}><h1 class="text-xl font-semibold mb-10"${_scopeId}>${ssrInterpolate($props.article.title)}</h1><p${_scopeId}>${ssrInterpolate($props.article.body)}</p></div></article>`);
      } else {
        return [
          createVNode("article", { class: "mx-auto mt-10 flex justify-center max-w-5xl border-b-2" }, [
            createVNode("img", {
              src: this.article.image_url,
              class: "w-80 h-80 rounded-xl mx-auto py-5",
              alt: ""
            }, null, 8, ["src"]),
            createVNode("div", { class: "text-left flex flex-col pt-5 pb-10 px-10" }, [
              createVNode("h1", { class: "text-xl font-semibold mb-10" }, toDisplayString($props.article.title), 1),
              createVNode("p", null, toDisplayString($props.article.body), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
