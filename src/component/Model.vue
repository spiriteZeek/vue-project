<script>
import { computed } from "vue";
export default {
  name: "ModelComp",
  props: ["modelValue", "second", "third"],
  emits: ["update:modelValue", "update:second", "update:third"],
  setup(props, { emit }) {
    function getInputValue(event) {
      emit("update:modelValue", event.target.value);
    }
    function updateSecondText(event) {
      emit("update:second", event.target.value);
    }
    const third = computed({
      get() {
        return props.third;
      },
      set(value) {
        emit("update:third", value);
      }
    })
    return {
      getInputValue,
      updateSecondText,
      third,
    };
  },
};
</script>
<template>
  <div>
    <span>第一个:</span>
    <input :value="modelValue" @input="getInputValue" />
    {{ modelValue }}
  </div>

  <div>
    <span>第二个:</span>
    <input :value="second" @input="updateSecondText" />
    {{ second }}
  </div>
  <div>
    <span>第三个:</span>
    <input v-model="third" />
    <!-- <input :value="third" @input="third = $event.target.value" /> -->
    {{ third }}
  </div>
</template>
<style scoped></style>
