<script>
import { ref, watch } from "vue";
export default {
  name: "PartComp",
  props: ['msg', 'obj'],
  setup(props) {
    console.log(props);

    const partLocal = ref(props.obj.name);
    watch(() => props.obj.name, () => {
      partLocal.value = props.obj.name;
    })
    setTimeout(() => {
      // props.obj.name = '哈哈哈' 会通知修改父组件的数据
      // 建议是子组件用一个local变量进行保存
      partLocal.value = props.obj.name + '[子级修改]';
    }, 5000)
  
    return {
      partLocal,
    };
  }
};

</script>

<template>
  <div>{{ msg }}</div>
  <br>
  <div>子级变量：</div>
  <div>{{ partLocal }}</div>
</template>
