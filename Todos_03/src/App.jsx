import { useState } from "react";
import TodoList from "./Components/TodoList";
import SearchBar from "./Components/SearchBar";
import TodoForm from "./Components/TodoForm";

function App() {
  const [text, setText] = useState({ id: 0, text: "" });
  const [Todos, setTodos] = useState([
    { id: 1, text: "learn" },
    { id: 2, text: "Progress" },
    { id: 3, text: "test" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (  ) => {
    // event.preventDefault();

    if (text.id === 0) {
      setTodos([{ id: Date.now(), text: text.text }, ...Todos]);
    } else {
      setTodos(Todos.map((item) => (item.id === text.id ? text : item)));
    }
    // setTodos([...Todos,{id: Date.now(),text:text}]) // TO MAKE THE INPUT AT LAST
    // setTodos([{id: Date.now(),text:text.text},...Todos,]) //TO MAKE THE INPUT AT TOP
    setText({ id: 0, text: "" });
  };

  const handleDelete = (idDelete) => {
    setTodos(Todos.filter((item) => item.id != idDelete));
  };

  const editValue = (objEdit) => {
    setText(objEdit);
  };

  const handleSearchChange = (inputValue) => {
    setSearchTerm(inputValue);
  }

  const handleInputChange = (inputValue) => {
    setText({...text, text: inputValue});
  }

  const filteredTodos = Todos.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h3>Todos App</h3>
      {/* Add Todos  */}
     <TodoForm text={text} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
      <br />
      <SearchBar handleSearchChange={handleSearchChange} />

      {/* List Todos  */}
      <TodoList
        filteredTodos={filteredTodos}
        editValue={editValue}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
