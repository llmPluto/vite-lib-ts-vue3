<template>
  <div
    @click="onClick"
    class="sidebar-item"
    :class="{ 'disabled-item': disabled, 'active-item': selected }"
  >
    <div class="inner">
      <template v-if="$slots.title">
        <slot name="title"></slot>
      </template>
      <template v-else>{{ title }}</template>
    </div>
    <div class="stick"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { SIDEBAR_KEY } from "../SideBar/types";
import { useParent } from "../../hooks/useRelation";

defineOptions({
  name: "WSideBarItem",
});

const { parent, index } = useParent(SIDEBAR_KEY);

const props = defineProps<{
  title?: string;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  click: [index: number];
}>();

const computedActiveColor = computed(() => {
  return parent?.activeColor ?? "#4285f4";
});

const selected = computed(() => {
  return index.value === parent?.getActive();
});

const onClick = () => {
  if (props.disabled) {
    return;
  }
  emits("click", index.value);
  parent?.setActive(index.value);
};
</script>

<style lang="less" scoped>
.sidebar-item {
  height: 60px;
  line-height: 22px;

  background-color: #f5f5f5;
  padding-left: 16px;
  color: #5e5f66;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  .inner {
    width: 64px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
  }
}
.disabled-item {
  color: #b0b1b8;
  cursor: default;
}
.active-item {
  color: #1b1d33;
  background-color: #fff;
  font-weight: 500;

  .stick {
    width: 3px;
    height: 24px;
    background-color: v-bind(computedActiveColor);
    margin-left: auto;
  }
}
</style>
