<script>
import { ref } from "vue";
import AncestryComp from "@/comm/Ancestry.vue"
export default {
  name: 'CommComp', //comm:通信
  components: {
    AncestryComp,
  },
  setup() {
    const ancestryModel = ref('ancestryModel');
    return {
      ancestryModel,
    };
  },
};
</script>
<template>
  <div>张广园</div>
  {{ ancestryModel }}
  <ancestry-comp v-model="ancestryModel">
  </ancestry-comp>
</template>

<style scoped>
</style>
