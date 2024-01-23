<script>
import { ref, watch } from "vue";

const dialogs = ref([
  {
    question: "",
    answer: "",
  },
]);

async function getAnswer() {
  const res = await fetch(
    `http://124.223.90.239:8000/api/qingyunke?msg=${inputQuestion.value}`
  );
  const data = await res.json();
}

const inputQuestion = ref("");
export default {
  name: "ChatBot",
  setup() {
    watch(inputQuestion, async () => {
      if (inputQuestion.value.indexOf("？") > -1) {
        const res = await fetch(
          `http://124.223.90.239:8000/api/qingyunke?msg=${inputQuestion.value}`
        );
        const ans = await res.json();
        const question = inputQuestion.value;
        const answer = ans.data.msg;
        dialogs.value.push({ question: question, answer: answer });
      }
    });
    return {
      dialogs,
      inputQuestion,
    };
  },
};
</script>

<template>
  <body>
    <input v-model="inputQuestion" />
    <!-- <button @click="">提问</button> -->
    <div id="context" v-for="dialog in dialogs">
      <div>Q: {{ dialog.question }}</div>
      <div>A: {{ dialog.answer }}</div>
    </div>
  </body>
</template>

<style>
#context {
  justify-content: center;
  background-color: blanchedalmond;
  width: 60%;
  font-size: large;
}
</style>
