<script>
// 导入lib
import { ref, reactive } from "vue";
import { user, user1 } from '@/utils/user.js'


export default {
  name: "App",
  setup() {
    // 创建响应式变量
    const count = ref(0);

    const aimObj = {
      skill: [1, 2, 3, 4, 5],
      obj: {
        name: 'spirite',
        age: 20,
      }
    }

    const changedObj = {
      name: 'jet',
      age: 20,
    }

    const reactiveChangedObj = {
      skill: [5],
      obj: {
        name: 'jet',
        age: 20,
      }
    }

    const refObj = ref(aimObj);

    const reactiveObj = reactive(aimObj);

    setTimeout(() => {
      // reactiveObj.skill = [6];
      reactiveObj = reactiveChangedObj;
    }, 2000);

    return {
      count,
      refObj,
      reactiveObj,
      user,
      user1
    }
  },
};
</script>

<template>
  <div class="title">{{ count }}</div>
  <div>{{ reactiveObj.skill }}</div>
  <div>{{ reactiveObj.obj.name }}</div>
  <div>{{ user.name }}</div>
  <div>{{ user1.name }}</div>
</template>

<style></style>
