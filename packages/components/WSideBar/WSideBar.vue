<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useChildren } from "../../hooks/useRelation";
import { SIDEBAR_KEY } from "./types";

defineOptions({
  name: "WSideBar",
});

const props = defineProps<{
  modelValue?: number;
  activeColor?: string;
}>();

const emits = defineEmits<{
  "update:modelValue": [index: number];
  change: [index: number];
}>();
props;
const getActive = () => props.modelValue;

const setActive = (value: number) => {
  if (value !== getActive()) {
    emits("update:modelValue", value);
    emits("change", value);
  }
};

const { linkChildren } = useChildren(SIDEBAR_KEY);
linkChildren({
  getActive,
  setActive,
  activeColor: props.activeColor,
});
</script>

<style lang="less" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 96px;
}
</style>
