import { App } from './src/todoapp/app'
import store  from "./src/store/todo.store";
import './style.css'


App('#app')
store.initState()