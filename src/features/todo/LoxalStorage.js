// Load todos from LocalStorage 

export const LoadTodos=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[]
};


// Save todos to localStorage

export const saveTodos=(todos)=>{
localStorage.setItem('todos', JSON.stringify(todos))
}