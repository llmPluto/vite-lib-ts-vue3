import { defineComponent as r, ref as c, openBlock as p, createElementBlock as s, createTextVNode as a, toDisplayString as e, createElementVNode as l } from "vue";
const _ = /* @__PURE__ */ r({
  name: "Foo",
  __name: "Foo",
  props: {
    tip: {}
  },
  setup(o) {
    const t = o, n = c("test");
    return (i, m) => (p(), s("div", null, [
      a(e(n.value) + " ", 1),
      l("div", null, e(t.tip || "测试o"), 1)
    ]));
  }
});
export {
  _ as Foo
};
