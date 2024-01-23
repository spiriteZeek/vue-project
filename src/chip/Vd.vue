<script>
import { ref } from "vue";
const inputValue = ref("123456");
const modelValue = ref('spirite');

export default {
  setup() {
    function printInput(e) {
      // inputValue.value = e.target.value;
      console.log(e);
    }

    setInterval(() => {
      console.log(modelValue.value);
    }, 2000)

    return {
      inputValue,
      printInput,
      modelValue,
    };
  },
};
</script>

<template>
  <input v-bind:value="inputValue" v-on:input="printInput($event)" />
  <input v-model="modelValue" />
</template>
