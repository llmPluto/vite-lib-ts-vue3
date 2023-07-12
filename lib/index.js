import e from "./components/WSideBar/index.js";
import n from "./components/WSideBarItem/index.js";
const r = [e, n], a = (t) => {
  r.forEach((o) => {
    t.component(o.name, o);
  });
}, s = {
  install: a
};
export {
  e as WSideBar,
  n as WSideBarItem,
  s as default
};
