import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = resolveComponent("Header");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, { class: "bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 w-full text-center py-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-white font-bold text-4xl"${_scopeId}>Kinsta Blog</h1>`);
      } else {
        return [
          createVNode("h1", { class: "text-white font-bold text-4xl" }, "Kinsta Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<main class="container mx-auto text-center">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="bg-gradient-to-b from-transparent to-gray-300 w-full text-center mt-5 py-10 mx-auto"><h2 class="font-bold text-xl pb-5">Join our Newsletter</h2><input class="rounded-xl w-80 h-12 px-3 py-2 shadow-md" type="email" placeholder="Write your email.."></footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/KinstaLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const KinstaLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  KinstaLayout as K,
  _export_sfc as _
};
