<script>
  export default {
    name: 'AButton',  
  }

</script>

<template>
  <header><slot name="header"></slot></header>
  <main><slot></slot></main>
  <footer><slot name="footer"></slot></footer>
</template>