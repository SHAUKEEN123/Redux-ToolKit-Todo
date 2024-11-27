import react from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <p className='text-4xl'>To-Do web App</p>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App

