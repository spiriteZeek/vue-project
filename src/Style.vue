<script>
import { ref } from "vue";

const inputColor = ref('');
const colorFont = ref('');
function changeColor() {
  alert("change color");
  colorFont.value = inputColor.value;
}

export default {
  name: "StyleComp",
  setup() {
    return {
      inputColor,
      changeColor,
      colorFont
    };
  },
};
</script>
<template>
  <div :style="{color: colorFont}">请输入你想要修改的颜色</div>
  <input v-model="inputColor" />
  <button @click="changeColor">改色</button>
</template>
<style></style>
