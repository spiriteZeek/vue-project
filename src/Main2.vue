<script>
  import ModelComp from '@/component/Model.vue';
  import {ref} from 'vue';
  export default {
    name: 'Main2',
    components: {
      ModelComp,
    },
    setup() {
      const inputText1 = ref('modelValue');
      const inputText2 = ref('second');
      const inputText3 = ref('third');
      return {
        inputText1,
        inputText2,
        inputText3,
      }
    }
  }
</script>
<template>
  <div>
    <model-comp v-model:modelValue="inputText1" v-model:second="inputText2" v-model:third="inputText3"></model-comp>
  </div>
</template>