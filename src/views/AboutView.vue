<script setup lang="ts">
</script>

<template>
  <div class="about">
    <h1>My name is Dmitriy</h1>
    <p>This is About block. And you can check my profile :)</p>
    <a target="_blank" href="https://github.com/betterhell">Github</a>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.about {
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
