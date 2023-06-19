import {createStore} from "vuex";
import {nanoid} from "nanoid";
import {TodoModel} from "../models/TodoModel";
import {vuexLocal} from "../localStorage";

interface StoreProps {
    todos: TodoModel[]
}

export const store = createStore<StoreProps>({
    state: {
        todos: []
    },
    mutations: {
        ADD_TODO (state, payload) {
            const newTodo = {
                id: nanoid(),
                text: payload,
                completed: false,
            }
            state.todos.unshift(newTodo)
        },
        DELETE_TODO (state, payload) {
            const todoIndex = state.todos.findIndex(todo => todo.id === payload);
            state.todos.splice(todoIndex, 1);
        },
        EDIT_TODO (state, payload) {
            const todo = state.todos.find(todo => todo.id === payload.id);

            if (todo) {
                todo.text = payload.text
                todo.completed = false
            }
        },
        TOGGLE_TODO: (state, payload) => {
            const todo = state.todos.find(todo => todo.id === payload);

            if (todo) {
                todo.completed = !todo.completed;
            }
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