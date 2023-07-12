declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number>;
    };
    activeColor: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (index: number) => void;
    change: (index: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number>;
    };
    activeColor: {
        type: import("vue").PropType<string>;
    };
}>> & {
    "onUpdate:modelValue"?: ((index: number) => any) | undefined;
    onChange?: ((index: number) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
