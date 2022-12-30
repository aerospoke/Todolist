import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import ContainerPrincipal from './styles/ContainerPrincipal'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

const todos= [
  {
    text:'cortar cebolla', completed:false, id:'1'
  },
  {
    text:'cortar cebolla', completed:false, id:'2'
  },
  {
    text:'cortar cebolla', completed:false, id:'3'
  }
]

function App() {
  
  return (
  <ContainerPrincipal>
    <TodoCounter/>
    <TodoSearch/>
    <CreateTodoButton/>
    <TodoList>
      {todos.map(todo => ( 
        <TodoItem key={todo.id} text={todo.text}/>
      ))}
    </TodoList>
    
  </ContainerPrincipal>
  )
}

export default App
