<script>
import { ref, provide } from "vue";
import FatherComp from "@/comm/Father.vue";
export default {
  name: "AncestryComp",
  components: {
    FatherComp,
  },
  setup() {
    const provideObj = {
      name: '依赖注入的对象名'
    }
    provide('provideObj', provideObj)
    const ancestryInput = ref("祖先");

    const fatherModel = ref("父亲");

    //父亲更新祖先
    function fatherUpdateAncestry(data) {
      console.log(data)
      ancestryInput.value = data;
    }

    setTimeout(() => {
      console.log('修改依赖注入的对象名')
      provideObj.name = "已修改依赖注入";
    }, 3000);


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
