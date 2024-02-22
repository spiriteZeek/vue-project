<script>
import { ref } from "vue";
import AncestryComp from "@/comm/Ancestry.vue"
import PingComp from "@/component/Ping.vue"
import PongComp from "@/component/Pong.vue"
export default {
  name: 'CommComp', //comm:通信
  components: {
    AncestryComp,
    PingComp,
    PongComp,
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
  <div class="pingpong">
    <ping-comp></ping-comp>
    <pong-comp></pong-comp>
  </div>
</template>

<style scoped>
.pingpong {
  margin-top: 200px;
}
</style>
