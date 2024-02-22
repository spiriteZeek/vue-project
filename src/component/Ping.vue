<script>
import { ref, watch } from "vue";
import { pingSend, pongSend } from "@/utils/pingpong.js";
import { eventBus, eventType } from "@/utils/eventbus.js";
export default {
  name: "PingComp",
  setup() {
    const count = ref(1);

    eventBus.on(eventType.pong, (val) => {
      console.log("ping watch pong event");
      count.value += val;
    });

    function sendByBus() {
      eventBus.emit(eventType.ping, count.value);
    }

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
      sendByBus,
    };
  },
};
</script>

<template>
  <div>
    {{ count }}
    <button @click="send">传递数据</button>
    <button @click="sendByBus">通过事件总线传递数据</button>
  </div>
</template>
