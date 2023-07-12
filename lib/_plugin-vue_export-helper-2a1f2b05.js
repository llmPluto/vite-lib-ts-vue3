function s(t, a) {
  const { name: n } = t;
  return {
    ...t,
    name: a ?? n,
    install: (e) => {
      e.component(a ?? n, t);
    }
  };
}
const c = Symbol("SIDEBAR"), o = (t, a) => {
  const n = t.__vccOpts || t;
  for (const [r, e] of a)
    n[r] = e;
  return n;
};
export {
  c as S,
  o as _,
  s as w
};
