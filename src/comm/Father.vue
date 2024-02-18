<script>
import { ref, watch, computed } from "vue";
import ChildComp from "@/comm/Child.vue"
export default {
  props: ["ancestryValue"],
  emits: ["update:ancestryValue"],
  components: {
    ChildComp,
  },
  setup(props, { emit }) {
    console.log(props.ancestryValue)
    const fatherLocal = computed({
      get() {
        return props.ancestryValue;
      },
      set(value) {
        emit("update:ancestryValue", value);
      }
    });
    function fatherUpdate(event) {
      console.log("父亲来更新组件内的所有内容");
      emit("update:ancestryValue", event.target.value);
    }
    function childUpdateFather(data) {
      console.log("儿子更新父亲", data)
      fatherLocal.value = data;
    }
    watch(
      () => props.ancestryValue,
      () => {
        console.log("ancestry changed from father");
        fatherLocal.value = props.ancestryValue;
      }
    );

    return {
      fatherLocal,
      fatherUpdate,
      childUpdateFather
    };
  },
};
</script>

<template>
  <div class="father">
    <div>div:父亲</div>
    {{ fatherLocal }}
    <el-input v-model="fatherLocal"></el-input>
    <!-- <el-button @click="fatherUpdate">父亲更新</el-button> -->
    <child-comp :fatherValue="fatherLocal" @update:fatherValue="childUpdateFather"></child-comp>
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
