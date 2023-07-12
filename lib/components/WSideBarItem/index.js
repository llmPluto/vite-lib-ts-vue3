import "./index.css";
import { S as _, _ as p, w as v } from "../../_plugin-vue_export-helper-2a1f2b05.js";
import { inject as f, getCurrentInstance as I, onUnmounted as S, computed as a, ref as b, defineComponent as k, useCssVars as B, openBlock as r, createElementBlock as d, normalizeClass as C, createElementVNode as u, renderSlot as h, Fragment as x, createTextVNode as y, toDisplayString as g, pushScopeId as W, popScopeId as A } from "vue";
function E(t) {
  const n = f(t, null);
  if (n) {
    const s = I(), { link: e, unlink: i, internalChildren: c } = n;
    e(s), S(() => i(s));
    const l = a(() => c.indexOf(s));
    return {
      parent: n,
      index: l
    };
  }
  return {
    parent: null,
    index: b(-1)
  };
}
const w = (t) => (W("data-v-7695bbce"), t = t(), A(), t), V = { class: "inner" }, D = /* @__PURE__ */ w(() => /* @__PURE__ */ u("div", { class: "stick" }, null, -1)), N = /* @__PURE__ */ k({
  name: "WSideBarItem",
  __name: "WSideBarItem",
  props: {
    title: {},
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const s = t;
    B((o) => ({
      "0055887d": c.value
    }));
    const { parent: e, index: i } = E(_), c = a(() => (e == null ? void 0 : e.activeColor) ?? "#4285f4"), l = a(() => i.value === (e == null ? void 0 : e.getActive())), m = () => {
      s.disabled || (n("click", i.value), e == null || e.setActive(i.value));
    };
    return (o, j) => (r(), d("div", {
      onClick: m,
      class: C(["sidebar-item", { "disabled-item": o.disabled, "active-item": l.value }])
    }, [
      u("div", V, [
        o.$slots.title ? h(o.$slots, "title", { key: 0 }, void 0, !0) : (r(), d(x, { key: 1 }, [
          y(g(o.title), 1)
        ], 64))
      ]),
      D
    ], 2));
  }
});
const $ = /* @__PURE__ */ p(N, [["__scopeId", "data-v-7695bbce"]]), O = v($);
export {
  O as default
};
