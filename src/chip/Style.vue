<script>
import { ref } from "vue";

const inputColor = ref('');
const colorFont = ref('');
const bgColor = ref('');
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
      colorFont,
      bgColor,
    };
  },
};
</script>
<template>
  <div :style="{color: colorFont}">请输入你想要修改的颜色</div>
  <input v-model="inputColor" />
  <button @click="changeColor">改色</button>
  <br/>
  <input type="color" v-model="bgColor"/>
  <div class="box" :style="{backgroundColor: bgColor}">自由选择你想填充的颜色</div>
</template>
<style>
.box {
  height: 100px;
  width: 100px;
  border: 5px solid red;
}
</style>
