<script setup lang="ts">
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";
</script>

<template>
  <div class="todo-wrapper">
    <TodoInput />
    <TodoList  />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";

.todo-wrapper {
  max-width: 400px;
  width: 100%;
  padding: $main-padding;
}
</style>
