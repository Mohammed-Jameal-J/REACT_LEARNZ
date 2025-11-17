import { useState } from "react";

function App() {
  const [text,setText] = useState({id:0, text:''})
  const [Todos, setTodos] = useState(
    [
      {id:1,text:"learn"},
      {id:2,text:"Progress"},
      {id:3,text:"test"}
    ]);

    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit=(event)=>{
      event.preventDefault()

      if(text.id === 0){
        setTodos([{id: Date.now(),text:text.text},...Todos,])
      } else{
        setTodos(Todos.map(item => item.id === text.id ? text:item))
      }
      // setTodos([...Todos,{id: Date.now(),text:text}]) // TO MAKE THE INPUT AT LAST
      // setTodos([{id: Date.now(),text:text.text},...Todos,]) //TO MAKE THE INPUT AT TOP
      setText({id:0,text:""})
    }

    const handleDelete=(idDelete)=>{
      setTodos(Todos.filter(item=>item.id != idDelete))
    }

        const editValue=(objEdit)=>{
          setText(objEdit)
        }

    const filteredTodos = Todos.filter(item=>item.text.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <h3>Todos App</h3>
      {/* Add Todos  */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e=> setText({...text,text:e.target.value})} value={text.text} placeholder="Add a New Task" />
        
        {text.id === 0 && <button type="submit">ADD</button>}
        {text.id !== 0 && <button type="submit">EDIT</button>}
      </form>
      <br />
      <input type="text" onChange={e=> setSearchTerm(e.target.value)} placeholder="Search Task"/>

      {/* List Todos  */}
      <ul>
        {filteredTodos.map(item => (
          <li key={item.id}>{item.text}
          <button onClick={()=>editValue(item)}>Edit</button>
          <button onClick={()=>handleDelete(item.id)}>Delete</button>
          
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
