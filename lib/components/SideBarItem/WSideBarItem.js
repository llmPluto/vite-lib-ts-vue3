import { S as _, _ as p, w as f } from "../../_plugin-vue_export-helper-2a1f2b05.js";
import { inject as v, getCurrentInstance as I, onUnmounted as S, computed as l, ref as k, defineComponent as B, useCssVars as C, openBlock as r, createElementBlock as d, normalizeClass as h, createElementVNode as u, renderSlot as b, Fragment as x, createTextVNode as y, toDisplayString as g, pushScopeId as A, popScopeId as E } from "vue";
function w(t) {
  const n = v(t, null);
  if (n) {
    const s = I(), { link: e, unlink: i, internalChildren: c } = n;
    e(s), S(() => i(s));
    const a = l(() => c.indexOf(s));
    return {
      parent: n,
      index: a
    };
  }
  return {
    parent: null,
    index: k(-1)
  };
}
const V = (t) => (A("data-v-6aef47f9"), t = t(), E(), t), D = { class: "inner" }, N = /* @__PURE__ */ V(() => /* @__PURE__ */ u("div", { class: "stick" }, null, -1)), W = /* @__PURE__ */ B({
  name: "WSideBarItem",
  __name: "SideBarItem",
  props: {
    title: {},
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const s = t;
    C((o) => ({
      "73b92898": c.value
    }));
    const { parent: e, index: i } = w(_), c = l(() => (e == null ? void 0 : e.activeColor) ?? "#4285f4"), a = l(() => i.value === (e == null ? void 0 : e.getActive())), m = () => {
      s.disabled || (n("click", i.value), e == null || e.setActive(i.value));
    };
    return (o, j) => (r(), d("div", {
      onClick: m,
      class: h(["sidebar-item", { "disabled-item": o.disabled, "active-item": a.value }])
    }, [
      u("div", D, [
        o.$slots.title ? b(o.$slots, "title", { key: 0 }, void 0, !0) : (r(), d(x, { key: 1 }, [
          y(g(o.title), 1)
        ], 64))
      ]),
      N
    ], 2));
  }
});
const $ = /* @__PURE__ */ p(W, [["__scopeId", "data-v-6aef47f9"]]), K = f($);
export {
  K as default
};
