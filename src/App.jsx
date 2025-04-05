import React, { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import TodoCard from "./Components/TodoCard";
import "../index.css";
const App = () => {
  const [todos, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistTodo(newTodoList) {
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  }


  function addTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistTodo(newTodoList);
    setTodoList(newTodoList);
  }

  function removeTodo(index) {
    const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistTodo(updatedTodos);
    setTodoList(updatedTodos);
  }

  function handleEditTodo(index) {
    const editTodo = todos[index];
    setTodoValue(editTodo);
    removeTodo(index);
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodoList(localTodos);
  }, []);

  return (
    <main>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        addTodo={addTodo}
      />
      <TodoList
        removeTodo={removeTodo}
        todos={todos}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
};

export default App;
