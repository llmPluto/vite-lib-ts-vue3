<template>
  <div>
    {{ text }}
    <div>{{ props.title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const text = ref<string>("hello world!");
const props = defineProps<{
  title?: string;
}>();

defineOptions({
  name: "Bar",
});
</script>
