import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const TodoCard = (props) => {
  const { children, removeTodo , index , handleEditTodo } = props;
  
  return (
    
  
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button>
          <FaEdit onClick={() => {
            handleEditTodo(index);
          }}/>
        </button>
        <button>
          <FaTrash onClick={() => {
            removeTodo(index);
          }}/>
        </button>
     </div>
    </li>
  )
};

export default TodoCard;
