<script>
import { ref, watch } from "vue";
import { pingSend, pongSend } from "@/utils/pingpong.js";
export default {
  name: "PingComp",
  setup() {
    const count = ref(1);

    function send() {
      console.log("send value");
      pingSend.value = count.value;
    }
    watch(pongSend, (val) => {
      count.value += val;
    });
    return {
      count,
      send,
    };
  },
};
</script>

<template>
  <div>
    {{ count }}
    <button @click="send">传递数据</button>
  </div>
</template>
