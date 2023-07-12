import type { App } from "vue";
import WSideBar from "./components/SideBar";
import WSideBarItem from "./components/SideBarItem";

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
