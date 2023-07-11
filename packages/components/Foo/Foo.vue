<template>
  <div>
    {{ str }}
    <div>{{ props.tip || "测试o" }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const str = ref("test");

defineOptions({
  name: "Foo",
});

const props = defineProps<{
  tip?: string;
}>();
</script>
