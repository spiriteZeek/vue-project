<script>
import { ref } from "vue";

const students = ref([
  {
    name: "zeek",
    age: 20,
    height: 180,
  },
  {
    name: "jet",
    age: 20,
    height: 168,
  },
]);

const name = ref("spirite");

function greet(event) {
  console.log(`Hello ${name.value}!`);
  // event是dom原生事件
  if (event) {
    console.log(event.target.tagName);
  }
}

function test(msg, event) {
  console.log(msg);
  console.log(event);
}

const inputValue = ref("spirite");

export default {
  name: "VforComp",

  setup() {
    return {
      students,
      inputValue,
      name,
      greet,
      test,
    };
  },
};
</script>

<template>
  <div v-for="(student, index) in students" :key="student.height">
    <div>序号：{{ index + 1 }}</div>
    <div>{{ student.name }}</div>
    <div>{{ student.age }}</div>
    <div>{{ student.height }}</div>
  </div>
  <input :value="inputValue" :disabled="true" />
  <button v-on:click="() => console.log('内联点击')">内联点击</button>
  <button @click="greet">方法事件</button>
  <button @click="test('msg', $event)">传递函数表达式</button>
</template>
