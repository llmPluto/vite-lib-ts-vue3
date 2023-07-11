import type { App } from "vue";
import Foo from "./components/Foo";
import Bar from "./components/Bar";

const components = [Foo, Bar];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export { Foo, Bar };
