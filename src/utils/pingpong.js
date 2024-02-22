// 用来保存需要传递的数据
import { ref } from "vue";

const pingSend = ref(0);
const pongSend = ref(0);

export {
  pingSend,
  pongSend
}