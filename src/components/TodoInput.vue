<script setup lang="ts">
import {ref} from "vue";
import {store} from "../store";
import {toast} from "vue3-toastify";

const inputText = ref("")

const handleNewTodo = () => {
  if (!inputText.value) return
  if (inputText.value.trim() === "") return
  store.dispatch("handleAddNewTodo", inputText.value.trim())
  inputText.value = ""
  toast.success("New task created!", {position: "bottom-right", autoClose: 2000})
}
</script>

<template>
    <div class="input">
      <input @keyup.enter="handleNewTodo" v-model="inputText" placeholder="Add task..." type="text">
      <button @click="handleNewTodo">Add</button>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";

.input {
  position: relative;
  width: 100%;

  input {
    padding: 12px 75px 12px 12px;
    width: calc(100% - 91px);
    border: 2px solid $bg-color;
    outline: transparent;
  }

  button {
    cursor: pointer;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 12px;
    border: 2px solid $bg-color;
    background: $bg-color;
    color: white;
    transition: all 0.3s ease-out;

    &:hover {
      background: #ffffff;
      color: $other-text;
    }
  }
}
</style>
