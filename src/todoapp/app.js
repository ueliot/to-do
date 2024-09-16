import html from './app.html?raw'
import todoStore from '../store/todo.store';
import { renderTodos } from './usescase';

const elementId ={
    TodoList :'.todo-list',
    NewTodoInput : '#new-todo-input'
}

export const App = (element)=> {
    
    const displayTodos= ()=>{
        
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementId.TodoList, todos);
    }

    (()=>{
        const app = document.createElement('div');
        app.innerHTML=html
        document.querySelector(element).append(app);
        displayTodos();

    })()

    //Referencias HTMLs
    const newDescriptionInput = document.querySelector(elementId.NewTodoInput);
    const todoListUl = document.querySelector(elementId.TodoList);
    //Add Listeners

    //add todo---------------------------------------------
    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode !== 13) return;
        if(event.target.value.trim() =='') return
        //console.log(event.target.value);
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value='';

    })

    //togle todos-------------------------------------------
    todoListUl.addEventListener('click',(event)=>{
        //console.log(event.target.closest('[data-id]'));
        const element = event.target.closest('[data-id]');
        //console.log(element.getAttribute('data-id'));
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();

    })

    //delete todo-----------------------------------------
    todoListUl.addEventListener('click',(event)=>{
        const element = event.target.closest('[data-id]');
        const isDestroyElement = event.target.className=='destroy';
       
        if(!element || !isDestroyElement) return;
        
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
       

    })




}