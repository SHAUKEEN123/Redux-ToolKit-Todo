import { createSlice, nanoid } from "@reduxjs/toolkit";
import { saveTodos, LoadTodos } from "./LoxalStorage";


const initialState = {
    todos: LoadTodos()
    // todos: JSON.parse(localStorage.getItem('todos')) || []
};

// const saveTodos = (todos) => {
//     localStorage.setItem('todos', JSON.stringify(todos));
// };

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            saveTodos(state.todos); 
        },
        removeTodo: (state,action)=>{
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
            saveTodos(state.todos); 
        },
        updateTodo: (state,action)=> {
            const { id, newText } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = newText; // Update the text of the found todo
            }
            saveTodos(state.todos); 
        }
    }
})

export const {addTodo,removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer