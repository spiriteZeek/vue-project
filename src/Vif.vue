<script>
import {ref} from 'vue';

const people = ref('女')

export default {
  name: 'VifComp',
  setup() {
    function isBoy() {
      return people.value === '男';
    };
    return {
      people,
      isBoy,
    }
  }
}
</script>

<template>
  <div v-if="people === '男'">zeek</div>
  <div v-else>jet</div>

  <div v-show="isBoy()">zeek</div>
  <div v-show="!isBoy()">jet</div>
</template>