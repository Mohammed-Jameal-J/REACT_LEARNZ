import { useState } from 'react'
import './App.css'
import UserCard from './UserCard'
import ProjectOne from './ProjectOne'
import TaskList from './TaskList'

function App() {
  const [count,setCount] = useState(0)
  const Increment=()=>{
    setCount(prev => prev+1)
    setCount(prev=> prev+1)
  }
  const Decrement=()=>{
    setCount(count-1)
  }

  return (
    <>
      <>
        <h1>React State</h1>
        <h3>Count : {count}</h3>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </>
      <UserCard />
      <ProjectOne />
      <TaskList />

    </>
  )
}

export default App
