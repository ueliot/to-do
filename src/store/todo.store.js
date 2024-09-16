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
        new Todo('Gemas de zumbach'),
    ],
    filter : Filters.All
}

const initState = ()=>{
    loadStore();
    console.log("initState......");
}


const loadStore = ()=>{
    if(!localStorage.getItem('state')) return;
    const {todos=[],filter=Filters.All} = JSON.parse(localStorage.getItem('state')); 
    state.todos=todos;
    state.filter=filter;
}


const saveStateToLocalStorage = ()=>{
    localStorage.setItem('state',JSON.stringify(state));
}

/**
 * 
 * @param {Filters} filter 
 */
const getTodos=(filter = Filters.All)=>{
     switch (filter) {
        case Filters.All:
            return [...state.todos]
        case Filters.Completed:
            return  state.todos.filter(todo => todo.done===true);
        case Filters.Pending:
            return state.todos.filter(todo => todo.done === false); 
        default:
            throw new Error(`option ${filter} not valid`);
            
     }
}


/**
 * 
 * @param {String} description 
 */
const addTodo = (description)=>{
    if (!description) throw new Error("Not Implemented");
    state.todos.push( new Todo(description));
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    
    //this is not optimal whit 1000 todos this is doing 1000 iteractions of return todo
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId){
            todo.done=!todo.done
        }
        return todo;
    })

    //the optimal will be find todo whit find method extract, 
    //change this todo and afeter insert this todo in the position were was find
   
  /*    state.todos = state.todos.forEach(todo => {
        if (todo.id===todoId) todo.done=!todo.done 
    }); */
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId)=>{
    state.todos = state.todos.filter( todo => todo.id!==todoId)
    saveStateToLocalStorage();
}

const deleteCompleted = ()=>{
   state.todos = state.todos.filter(todo => todo.done)
   saveStateToLocalStorage();
}

const setFilter = (newFilter = Filters.All)=>{
    //could be validate the newFilter
    state.filter = newFilter;
    saveStateToLocalStorage();
}


const getCurrentFilter = ()=>{
    return state.filter; 
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initState,
    loadStore,
    setFilter,
    toggleTodo,
}