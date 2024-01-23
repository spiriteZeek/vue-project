<script>
  import { ref, watch } from "vue";
  export default {
    name: 'ChildComp',
    props: ['addFn', 'obj'],
    setup(props) {
      function handleClick(num1, num2) {
        props.addFn(num1, num2, "child想要修改");
      }
      return {
        handleClick
      }
    }
  }
</script>

<template>
  <button @click="handleClick(2, 3)">大力神点</button>
  <div>{{ obj.name }}</div>
  <!-- <div>child:{{  }}</div> -->
</template>