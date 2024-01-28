<script>
import PartComp from "@/component/Part.vue";
import AttrsComp from "@/component/Attrs.vue";
import AButtonComp from "@/component/AButton.vue";
import TableComp from "@/component/Table.vue";
import ModelComp from "@/component/Model.vue";
import { ref } from "vue";
export default {
  name: "MainComp",
  components: {
    PartComp,
    AttrsComp,
    AButtonComp,
    TableComp,
    ModelComp,
  },
  setup() {
    const msgText = ref("父级组件的基础数据");
    const msgObj = ref({ name: "父级组件的对象数据" });
    const count = ref(0);
    const modelText = ref('');

    function add(num1, num2, name) {
      count.value = num1 + num2;
      msgObj.value.name = name;
    }

    function getData(data) {
      console.log(data);
    }

    setTimeout(() => {
      msgObj.value.name = "父级组件的对象数据[父级修改]";
    }, 3000);

    return {
      msgText,
      msgObj,
      count,
      add,
      getData,
      modelText,
    };
  },
};
</script>

<template>
  <!-- <part-comp msg="hello world"></part-comp>
  <part-comp msg="hello world1"></part-comp>
  <part-comp msg="hello world2"></part-comp> -->
  <!-- <part-comp :msg="msgText" :obj="msgObj"></part-comp>
  <br>
  <div>父级变量：</div>
  <div>{{ msgObj.name }}</div>
  <div>父级变量：{{ count }}</div>
  <br>
  <div>child:</div>
  <child-comp :add-fn="add" :obj="msgObj"></child-comp>
  <el-button>江苏大学</el-button> -->

  <!-- <attrs-comp class="title-zgy" @click="() => console.log('p')"></attrs-comp> -->
  <a-button-comp>
    <template v-slot:header>
      <div>header</div>
    </template>
    <div>main</div>
    <template v-slot:footer>
      <div>footer</div>
    </template>
  </a-button-comp>

  <attrs-comp></attrs-comp>
  <table-comp @submit="getData"></table-comp>
  <model-comp v-model="modelText"></model-comp>
</template>

<style scoped>
.title-zgy {
  color: red;
}
</style>
