<script>
import { ref, watch } from "vue";
const problem = ref("");
const answer = ref("");
const imgUrl = ref("");

async function getAnswer() {
  const res = await fetch(
    `http://124.223.90.239:8000/api/qingyunke?msg=${problem.value}`
  );
  const qingyungkeAns = await res.json();
  return qingyungkeAns.data.msg;
}

async function getGif() {
  const res = await fetch("https://yesno.wtf/api");
  const data = await res.json();
  return data.image;
}

export default {
  name: "WatchComp",
  setup() {
    watch(problem, () => {
      if (problem.value.indexOf("?") > -1) {
        Promise.all([getAnswer(), getGif()]).then(([ans, img]) => {
          console.log(ans,img);
          answer.value = ans;
          imgUrl.value = img;
        })
      }
    });
    return {
      problem,
      answer,
      imgUrl,
    };
  },
};
</script>

<template>
  <input v-model="problem" />
  <div>{{ answer }}</div>
  <img :src="imgUrl" />
</template>
