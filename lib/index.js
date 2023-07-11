import { defineComponent as a, ref as l, openBlock as s, createElementBlock as i, createTextVNode as p, toDisplayString as o, createElementVNode as m } from "vue";
const _ = /* @__PURE__ */ a({
  name: "Foo",
  __name: "Foo",
  props: {
    tip: {}
  },
  setup(t) {
    const e = t, n = l("test");
    return (c, r) => (s(), i("div", null, [
      p(o(n.value) + " ", 1),
      m("div", null, o(e.tip || "测试o"), 1)
    ]));
  }
});
function u(t, e) {
  const { name: n } = t;
  return {
    ...t,
    name: e ?? n,
    install: (r) => {
      r.component(e ?? n, t);
    }
  };
}
const d = u(_), f = /* @__PURE__ */ a({
  name: "Bar",
  __name: "Bar",
  props: {
    title: {}
  },
  setup(t) {
    const e = t, n = l("hello world!");
    return (c, r) => (s(), i("div", null, [
      p(o(n.value) + " ", 1),
      m("div", null, o(e.title), 1)
    ]));
  }
}), v = u(f), h = [d, v], x = (t) => {
  h.forEach((e) => {
    t.component(e.name, e);
  });
}, g = {
  install: x
};
export {
  v as Bar,
  d as Foo,
  g as default
};
