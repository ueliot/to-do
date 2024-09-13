import { Todo }  from "../todoapp/models/todo.model";
const Filters = {
    All : 'all',
    Pending: 'pending',
    Completed: 'completed'
}


const state = {
    todos : [
        new Todo('LLevar los libros a la 15:00...'),
        new Todo('Gemas del tiempo'),
    ],
    filter : Filters.All
}

const initState = ()=>{
    console.log(state);
    console.log("initState......");
}


const loadStore = ()=>{
    throw new Error("Not Implemented");  
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description)=>{
    throw new Error("Not Implemented");
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error("Not Implemented");  
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoI)=>{
    throw new Error("Not Implemented");  
}

const deleteCompleted = ()=>{
    throw new Error("Not Implemented");  
}

const setFilter = (newFilter = Filters.All)=>{
    throw new Error("Not Implemented");  
}


const getCurrentFilter = ()=>{
    
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initState,
    loadStore,
    setFilter,
}