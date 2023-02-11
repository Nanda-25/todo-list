import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

// CSS
import "./App.css";

function App() {
 //State
  const [todos, setTodos] = useState([
    { text: "Do this", isComplete: false },
    { text: "Do that", isComplete: false },
    { text: "Maybe something else", isComplete: false },
  ]);

  //Actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isComplete: false }];
    setTodos(newTodos);
  };

const completeToDo = (index) => {
  const newTodos = [...todos];
  newTodo[index].isComplete = true;
  setTodos(newTodos);
}

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} completeToDo= {completeToDo} />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
