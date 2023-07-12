import type { App } from "vue";
import WSideBar from "./components/WSideBar";
import WSideBarItem from "./components/WSideBarItem";

const components = [WSideBar, WSideBarItem];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export { WSideBar, WSideBarItem };
