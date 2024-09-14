import { Todo } from "../models/todo.model"


let element;
/**
 * 
 * @param {String} element 
 * @param {Todo[]} todos 
 */
export const renderTodos=(elementId , todos)=>{
 
    if(!element)
        element = document.querySelector(elementId)

    if(!element) throw new Error(`element: ${elementId} not found`);
    element.innerHTML='';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        const html =
        `
            <div class="view">
                        <input class="toggle" type="checkbox" ${todo.done?'checked':''}>
                        <label>${todo.description}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
        `

        li.innerHTML = html
        li.setAttribute('data-id', todo.id)
        if(todo.done)
            li.classList.add('completed');

        element.append(li);
    }); 

}