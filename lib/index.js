import { defineComponent as n, ref as l, openBlock as a, createElementBlock as c, createTextVNode as p, toDisplayString as e, createElementVNode as i } from "vue";
const u = /* @__PURE__ */ n({
  name: "Bar",
  __name: "Bar",
  props: {
    title: {}
  },
  setup(t) {
    const o = t, r = l("hello world!");
    return (s, m) => (a(), c("div", null, [
      p(e(r.value) + " ", 1),
      i("div", null, e(o.title), 1)
    ]));
  }
});
export {
  u as Bar
};
