<script setup lang="ts">
import {store} from "../store";
import {toast} from "vue3-toastify";
import {ref} from "vue";
import {Icon} from "@iconify/vue"

defineProps(["todo"])

const toggleEdit = ref(false)
const newTodoText = ref("")

const handleDelete = (id: string) => {
  store.dispatch("handleDeleteTodo", id)
  toast.warn("Task Deleted!", {position: "bottom-right"})
}

const toggleEditor = () => {
  toggleEdit.value = !toggleEdit.value
}

const handleEdit = (id: string) => {
  if (!newTodoText.value) return
  store.dispatch("handleEditTodo", {id, text: newTodoText.value})
  toggleEdit.value = false
  toast.success("Task Updated!", {position: "bottom-right"})
}

const handleComplete = (id: string) => {
  store.dispatch("toggleTodo", id)
}
</script>

<template>
  <li class="todo-list__item" v-bind:class="{ 'completed' : todo.completed }">
    <p @click="handleComplete(todo.id)" v-if="!toggleEdit">{{todo.text}}</p>
    <input v-model="newTodoText" v-else :placeholder=todo.text type="text" />
    <div>
      <button class="button__edit" v-if="!toggleEdit" @click="toggleEditor">
        <Icon icon="uil:edit" />
      </button>
      <button class="button__save" v-else @click="handleEdit(todo.id)">
        <Icon icon="mingcute:save-fill" />
      </button>
      <button class="button__delete" @click="handleDelete(todo.id)">
        <Icon icon="material-symbols:delete" />
      </button>
    </div>

  </li>
</template>

<style lang="scss" scoped>
@import "../styles/variables";

.completed {
  background: #5ad05a;

  p {
    text-decoration: line-through;
  }
}

.todo-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 12px;
  border: 1px solid #89cee8;

  p {
    cursor: pointer;
    margin: 0;
    padding: 6px;
    word-wrap: anywhere;
  }

  input {
    max-width: 200px;
    margin-right: 5px;
    width: 100%;
    padding: 6px;
    border: 2px solid $bg-color;
    outline: none;
  }

  div {
    display: flex;
    gap: 5px;
  }

  button {
    display: flex;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    padding: 5px;

    &:hover {
      background: $bg-color;
    }
  }

  .button__edit {
    background: orange;
    color: white;
  }

  .button__save {
    background: #40b3e5;
    color: white;
  }

  .button__delete {
    background: red;
    color: white;
  }
}
</style>
