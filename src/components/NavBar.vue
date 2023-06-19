<script setup lang="ts">
</script>

<template>
  <div class="navbar">
    <nav class="navbar__wrapper">
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/todos">Todos</router-link>
      </div>
      <div>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $main-padding;
  background: $bg-color;
  height: 36px;
}

a {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  color: white;
  margin-right: 8px;

  &:hover {
    border-bottom: 1px solid $hover-color;
  }
}



</style>
