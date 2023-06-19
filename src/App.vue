<script setup lang="ts">
import "normalize.css"
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
@import "./styles/font.scss";

body {
  background: #FCFDFC;
}

header, main, footer {
  font-family: 'Roboto', sans-serif;
}

main {
  padding: 66px 0;
  display: flex;
  justify-content: center;
}
</style>
