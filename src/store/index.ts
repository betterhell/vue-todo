import {createStore} from "vuex";
import {nanoid} from "nanoid";
import {TodoModel} from "../models/TodoModel";
import {vuexLocal} from "../localStorage";

interface StoreProps {
    text: string,
    todos: TodoModel[]
}

export const store = createStore<StoreProps>({
    state: {
        text: "",
        todos: []
    },
    mutations: {
        ADD_TODO (state, text) {
            const newTodo = {
                id: nanoid(),
                text,
                completed: false,
            }
            state.todos.push(newTodo)
        },
        DELETE_TODO (state, id) {
            const todoIndex = state.todos.findIndex(todo => todo.id === id);
            state.todos.splice(todoIndex, 1);
        },
        EDIT_TODO (state, payload) {
            const todo = state.todos.find(todo => todo.id === payload);
            if (todo) {
                todo.text = state.text
                todo.completed = false
            }
        },
        TOGGLE_TODO: (state, todoId) => {
            const todo = state.todos.find(todo => todo.id === todoId);

            if (todo) {
                todo.completed = !todo.completed;
            }
            console.log(todo)
        },
    },
    actions: {
        handleAddNewTodo ({commit}, todo) {
            commit("ADD_TODO", todo)
        },
        handleDeleteTodo ({commit}, id) {
            commit("DELETE_TODO", id)
        },
        handleEditTodo ({commit}, id) {
            commit("EDIT_TODO", id)
        },
        toggleTodo: ({commit}, id) => {
            commit("TOGGLE_TODO", id);
        },
    },
    getters: {
        allTodos: (state => state.todos)
    },
    plugins: [vuexLocal.plugin]
})