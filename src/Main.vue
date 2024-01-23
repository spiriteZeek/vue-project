<script>
  import PartComp from '@/component/Part.vue'
  export default {
    name: 'MainComp',
    components: {
      PartComp
    },
    setup() {

    }
  }
</script>

<template>
  <ChildComp></ChildComp>
  <ChildComp></ChildComp>
  <PartComp></PartComp>
  <child-comp></child-comp>
  <part-comp></part-comp>
</template>
