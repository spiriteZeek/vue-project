<script>
import { onMounted, onUpdated, ref } from "vue";
import { count } from "@/utils/time.js";
export default {
  setup() {
    const display = ref(null);
    onMounted(() => {
      console.log(display.value);
      console.log("onMounted");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    return {
      display,
      count,
    };
  },
};
</script>
<template>
  <div ref="display">{{ count }}</div>
</template>
