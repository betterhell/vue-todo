<script setup lang="ts">

</script>

<template>
  <div class="landing">
    <h1>Hey, this is a Simple Todo Application!</h1>
    <p>You can use it when you need to control the execution of any plan or task.</p>
    <router-link to="/todos">Ok, let go!</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.landing {
  text-align: center;
  padding: $main-padding;
}

h1 {
  color: $main-text;
}

p {
  color: $other-text;
}

a {
  color: #00b2ff;
  text-decoration: none;
  font-weight: bolder;
  font-size: larger;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #0d636b;
  }
}
</style>
