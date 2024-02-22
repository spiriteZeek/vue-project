<script>
import { ref, watch } from "vue";
import {pingSend,pongSend} from "@/utils/pingpong.js"
import eventBus from "@/utils/eventbus.js"
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
    eventBus.on("ping", (val) => {
      count.value += val;
    })
    function sendByBus() {
      //申明一个事件pong，触发后传递count的值
      eventBus.emit("pong", count.value)
    }
    return {
      count,
      send,
      sendByBus,
    }
  }
}
</script>

<template>
  <div>
    {{ count }}
    <button @click="send">传递数据</button>
    <button @click="sendByBus">通过事件总线传递数据</button>
  </div>
</template>