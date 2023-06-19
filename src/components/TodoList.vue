<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import {store} from "../store";

const todos = store.getters.allTodos
</script>

<template>
  <div v-auto-animate class="todo-list">
    <h1 v-if="!todos.length">It's very quiet here... write something!</h1>
    <h1 v-else>Oh, your tasks...</h1>
      <ul v-for="todo in todos" :key="todo.id">
        <TodoItem v-bind:todo="todo" />
      </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";

.todo-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    color: $main-text;
    text-align: center;
    font-size: 22px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
