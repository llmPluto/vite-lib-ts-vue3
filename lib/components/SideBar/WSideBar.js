import { S as p, _ as f, w as _ } from "../../_plugin-vue_export-helper-2a1f2b05.js";
import { reactive as l, getCurrentInstance as m, provide as x, isVNode as h, defineComponent as k, openBlock as y, createElementBlock as C, renderSlot as v } from "vue";
function B(s) {
  const e = [], n = (t) => {
    Array.isArray(t) && t.forEach((o) => {
      var r;
      h(o) && (e.push(o), (r = o.component) != null && r.subTree && (e.push(o.component.subTree), n(o.component.subTree.children)), o.children && n(o.children));
    });
  };
  return n(s), e;
}
const u = (s, e) => {
  const n = s.indexOf(e);
  return n === -1 ? s.findIndex(
    (t) => e.key !== void 0 && e.key !== null && t.type === e.type && t.key === e.key
  ) : n;
};
function b(s, e, n) {
  const t = B(s.subTree.children);
  n.sort(
    (r, i) => u(t, r.vnode) - u(t, i.vnode)
  );
  const o = n.map((r) => r.proxy);
  e.sort((r, i) => {
    const d = o.indexOf(r), c = o.indexOf(i);
    return d - c;
  });
}
function S(s) {
  const e = l([]), n = l([]), t = m();
  return {
    children: e,
    linkChildren: (r) => {
      x(
        s,
        Object.assign(
          {
            link: (c) => {
              c.proxy && (n.push(c), e.push(c.proxy), b(t, e, n));
            },
            unlink: (c) => {
              const a = n.indexOf(c);
              e.splice(a, 1), n.splice(a, 1);
            },
            children: e,
            internalChildren: n
          },
          r
        )
      );
    }
  };
}
const V = { class: "sidebar" }, g = /* @__PURE__ */ k({
  name: "WSideBar",
  __name: "SideBar",
  props: {
    modelValue: {},
    activeColor: {}
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: e }) {
    const n = s, t = () => n.modelValue, o = (i) => {
      i !== t() && (e("update:modelValue", i), e("change", i));
    }, { linkChildren: r } = S(p);
    return r({
      getActive: t,
      setActive: o,
      activeColor: n.activeColor
    }), (i, d) => (y(), C("div", V, [
      v(i.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const A = /* @__PURE__ */ f(g, [["__scopeId", "data-v-91c0f2a2"]]), E = _(A);
export {
  E as default
};
