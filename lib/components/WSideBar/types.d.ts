import { InjectionKey } from "vue";
export type SidebarProvide = {
    getActive: () => number | undefined;
    setActive: (value: number) => void;
    activeColor?: string;
};
export declare const SIDEBAR_KEY: InjectionKey<SidebarProvide>;
