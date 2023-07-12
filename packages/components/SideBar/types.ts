import { InjectionKey } from "vue";

export type SidebarProvide = {
  getActive: () => number | undefined;
  setActive: (value: number) => void;
  activeColor?: string;
};

export const SIDEBAR_KEY: InjectionKey<SidebarProvide> = Symbol("SIDEBAR");
