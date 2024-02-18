<script>
import { ref, computed, watch } from "vue";
export default {
  name: "ChildComp",
  props: ["fatherValue"],
  emits: ["update:fatherValue"],
  setup(props, { emit }) {
    const childLocal = computed({
      get() {
        return props.fatherValue
      },
      set(value) {
        emit('update:fatherValue', value)
      }
    });
    watch(() => props.fatherValue, () => {
      console.log("props.fatherValue changed")
      childLocal.value = props.fatherValue;
    })
    return {
      childLocal,
    };
  },
};
</script>
<template>
  <div class="child">
    <div>div:孩子</div>
    {{ childLocal }}
    <el-input v-model="childLocal"></el-input>
  </div>
</template>
<style scoped>
.child {
  height: 200px;
  width: 200px;
  background-color: saddlebrown;
  margin-left: 20px;
}
</style>
