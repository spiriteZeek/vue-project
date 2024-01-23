<script>
import PartComp from "@/component/Part.vue";
import { ref } from "vue";
export default {
  name: "MainComp",
  components: {
    PartComp,
  },
  setup() {
    const msgText = ref("父级组件的基础数据");
    const msgObj = ref({ name: "父级组件的对象数据" });
    const count = ref(0);

    function add(num1, num2, name) {
      count.value = num1 + num2;
      msgObj.value.name = name;
    }

    setTimeout(() => {
      msgObj.value.name = "父级组件的对象数据[父级修改]"
    }, 3000)

    return {
      msgText,
      msgObj,
      count,
      add
    };
  },
};
</script>

<template>
  <!-- <part-comp msg="hello world"></part-comp>
  <part-comp msg="hello world1"></part-comp>
  <part-comp msg="hello world2"></part-comp> -->
  <part-comp :msg="msgText" :obj="msgObj"></part-comp>
  <br>
  <div>父级变量：</div>
  <div>{{ msgObj.name }}</div>
  <div>父级变量：{{ count }}</div>
  <br>
  <div>child:</div>
  <child-comp :add-fn="add" :obj="msgObj"></child-comp>
</template>
