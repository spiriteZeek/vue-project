<script>
import { ref, watch } from "vue";
// import ChildComp from "@/comm/Child.vue"
export default {
  props: ["ancestryValue"],
  emits: ["update:ancestryValue"],
  // components: {
  //   // ChildComp,
  // },
  setup(props, { emit }) {
    console.log(props.ancestryValue)
    const fatherLocal = ref("本地父亲");
    function fatherUpdate(event) {
      console.log("父亲来更新组件内的所有内容");
      emit("update:ancestryValue", event.target.value);
    }
    watch(
      () => props.ancestryValue,
      () => {
        console.log("ancestry changed from father");
        fatherLocal.value = props.ancestryValue;
      }
    );
    function localUpdate() {

    }
    return {
      fatherLocal,
      fatherUpdate,
      localUpdate,
    };
  },
};
</script>

<template>
  <div class="father">
    <div>div:父亲</div>
    {{ fatherLocal }}
    <input :value="fatherLocal" @input="fatherUpdate"/>
    <!-- <el-button @click="fatherUpdate">父亲更新</el-button> -->
    <!-- <child-comp></child-comp> -->
  </div>
</template>

<style scoped>
.father {
  background-color: green;
  width: 200px;
  height: 200px;
  margin-left: 40px;
}
</style>
