import { App } from "vue";

export function withInstall<T>(
  options: T & { name: string },
  compName?: string
) {
  const { name } = options;

  const target: T = {
    ...options,
    name: compName ?? name,
    install: (app: App) => {
      app.component(compName ?? name, options);
    },
  };
  return target as T;
}
