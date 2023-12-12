<script>
import { ref, watch } from "vue";
const problem = ref({
  name: "zeek",
  prob: "我只想监听一小部分自己",
});
const answer = ref("");
const imgUrl = ref("");

export default {
  name: "WatchComp",
  setup() {
    watch(
      () => problem.value.prob,
      async () => {
        if (problem.value.prob.indexOf("?") > -1) {
          answer.value = "Thinking...";
          try {
            const res = await fetch("https://yesno.wtf/api");
            const data = await res.json();
            imgUrl.value = data.image;
            answer.value = data.answer;
          } catch (error) {
            answer.value = "Error!Could not reach the API." + error;
          }
        }
      }
    );
    return {
      problem,
      answer,
      imgUrl,
    };
  },
};
</script>

<template>
  <input v-model="problem.prob" />
  <div>{{ answer }}</div>
  <img :src="imgUrl" />
</template>
