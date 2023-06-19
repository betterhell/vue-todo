<script setup lang="ts">

</script>

<template>
  <kinesis-container class="not-found">
    <img src="../assets/confused.gif" alt="Error 404 - page not found">
    <h1>404</h1>
    <p>Page not found!</p>
  </kinesis-container>
</template>

<style lang="scss" scoped>
@import "../styles/variables";

.not-found {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  img {
    max-width: 400px;
    width: 100%;
    align-self: center;
  }

  h1 {
    color: $main-text;
  }

  p {
    color: $other-text;
  }
}
</style>