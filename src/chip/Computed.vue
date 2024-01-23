<script>
import { ref, computed } from "vue";

const inputName = ref("");
const author = ref({
  authorName: "spirite",
  books: [
    {
      bookName: "book1",
      price: 100,
    },
    {
      bookName: "book2",
      price: 100,
    },
  ],
});

const authorHasBooks = computed(() => {
  return author.value.books.length > 0 ? "是" : "否";
});

export default {
  name: "ComputedComp",
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const fullName = computed({
      get() {
        return firstName.value + lastName.value;
      },
      set(val) {
        [firstName.value, lastName.value] = val.split(" ");
      },
    });
    return {
      author,
      authorHasBooks,
      fullName,
      inputName,
    };
  },
};
</script>

<template>
  <button @click="author.books = []">你没辣</button>
  <div>作者是否出过书: {{ authorHasBooks }}</div>
  <div>what's your name</div>
  <input v-model="inputName" />
  <button @click="fullName = inputName">submit</button>
  <div>{{ fullName }}</div>
</template>
