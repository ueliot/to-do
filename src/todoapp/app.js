import html from './app.html?raw'
import todoStore from '../store/todo.store';
import { renderTodos } from './usescase';

const elementId ={
    TodoList :'.todo-list'
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
}