import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
const [todos, setTodos] = useState([]);

function addTodo(todo){
  if( todo.length === 0 ){
  alert('Please enter a Details');
  return;
}
let todoObject ={
  id:Math.floor(Math.random() * 100000),
  text:todo,
  isCompleted:false,
  time: new Date().toLocaleTimeString(),
  date: new Date().toLocaleDateString()

}
setTodos([...todos, todoObject]);
}

  return (
    <div className="container">
      <div className="inner-container">
        <Header />
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </div>
          </div>
  )
}

export default App