import React from "react";

const TodoInput = ({ addTodo,todoValue,setTodoValue }) => {
  
  return (

  
  <header>
      <input value={todoValue} onChange={(e)=> setTodoValue(e.target.value)} type="text" placeholder="Enter todo..." />
      <button onClick={() => {
        addTodo(todoValue);
        setTodoValue('');
      }}>
        Add Todo
        </button>
    </header>
  )
};

export default TodoInput;
