<script>
import { ref } from "vue";
import FatherComp from "@/comm/Father.vue";
export default {
  name: "AncestryComp",
  components: {
    FatherComp,
  },
  setup() {
    const ancestryInput = ref("祖先");

    const fatherModel = ref("父亲");

    //父亲更新祖先
    function fatherUpdateAncestry(data) {
      console.log(data)
      ancestryInput.value = data;
    }



    return {
      ancestryInput,
      fatherModel,
      fatherUpdateAncestry,
    };
  },
};
</script>
<template>
  <!-- {{ ancestryInput }} -->
  <div class="ancestry">
    <div>div:祖先</div>
    {{ ancestryInput }}
    <el-input v-model="ancestryInput" />
    <father-comp :ancestryValue="ancestryInput" @update:ancestryValue="fatherUpdateAncestry"></father-comp>
  </div>
</template>
<style scpoed>
.ancestry {
  background-color: pink;
  width: 200px;
  height: 200px;
  margin-left: 20px;
}
</style>
