<script>
import { watch, ref } from "vue";

export default {
  name: "AsyncDataComp",
  props: ["msg"],
  emits: ["update:asyncData"],
  setup(props, { emit }) {
    console.log(props.msg.people.msg);
    const msgLocal = ref("");

    // v-if的方法，可以直接在setup中写同步代码
    console.log("msg changed");
    msgLocal.value = props.msg.people.msg;
    


    watch(
      () => props.msg,
      () => {
        console.log("msg changed");
        msgLocal.value = props.msg.people.msg;
      },
      { immediate: true }
    );

    function updateFn() {
      console.log("emit update:asyncData");
      emit("update:asyncData", msgLocal.value);
    }

    return {
      msgLocal,
      updateFn,
    };
  },
};
</script>

<template>
  <el-input v-model="msgLocal" />
  <el-button @click="updateFn">更新</el-button>
</template>
