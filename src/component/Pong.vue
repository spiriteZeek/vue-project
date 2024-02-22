<script>
import { ref, watch } from "vue";
import {pingSend,pongSend} from "@/utils/pingpong.js"
export default {
  name: 'PongComp',
  setup() {
    const count = ref(1)
    function send() {
      pongSend.value = count.value;
    }
    watch(pingSend, (val) => {
      count.value += val;
    })
    return {
      count,
      send,
    }
  }
}
</script>

<template>
  <div>
    {{ count }}
    <button @click="send">传递数据</button>
  </div>
</template>