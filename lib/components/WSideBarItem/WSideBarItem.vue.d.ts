declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (index: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onClick?: ((index: number) => any) | undefined;
}, {}, {}>, {
    title?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
