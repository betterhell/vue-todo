<script setup lang="ts">

</script>

<template>
  <div class="not-found">
    <img src="../assets/confused.gif" alt="Error 404 - page not found">
    <h1>404</h1>
    <p>Page not found :[</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";

.not-found {
  background: #FCFDFC;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    color: $main-text;
  }

  p {
    color: $other-text;
  }
}
</style>