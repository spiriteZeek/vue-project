<script>
import ModelComp from "@/component/Model.vue";
import AsyncDataComp from "@/component/AsyncData.vue";
import { ref } from "vue";
export default {
  name: "Main2",
  components: {
    ModelComp,
    AsyncDataComp,
  },
  setup() {
    const inputText1 = ref("modelValue");
    const inputText2 = ref("second");
    const inputText3 = ref("third");
    const asyncData = ref(null);
    const asyncText = ref("");

    //控制AsyncData渲染时机
    const isShow = ref(false);

    // 更新asyncData的函数
    function asyncUpdate(data) {
      asyncData.value.people.msg = data;
    }

    // 异步函数
    setTimeout(() => {
      asyncText.value = "更新异步数据";
      asyncData.value = {
        people: {
          msg: "更新异步数据",
        },
      };
      isShow.value = true;
    }, 3000);

    return {
      inputText1,
      inputText2,
      inputText3,
      asyncData,
      asyncUpdate,
      isShow,
    };
  },
};
</script>
<template>
  <div>
    <model-comp
      v-model:modelValue="inputText1"
      v-model:second="inputText2"
      v-model:third="inputText3"
    ></model-comp>
  </div>
  <div class="async-data-father">
    <div>父级:{{ asyncData?.people?.msg }}</div>
    <div>
      <input v-model="asyncData.people.msg" />
      <!-- <input
        :value="props.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      /> -->
    </div>
    <div class="async-data-child">
      <async-data-comp
        v-if="isShow"
        @update:asyncData="asyncUpdate"
        :msg="asyncData"
      ></async-data-comp>
    </div>
  </div>
</template>

<style scoped>
.async-data-father {
  margin-top: 5%;
  height: 200px;
  width: 200px;
  background-color: coral;
}
.async-data-child {
  background-color: #fff;
  margin: 0% 10% 0% 10%;
  height: 150px;
  width: 150px;
}
</style>
