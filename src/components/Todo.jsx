import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>
          {todo.date} {todo.time}
        </p>
        <p>{todo.category}</p>
        <p>{todo.text}</p>
        <p>{todo.status}</p>
      </div>
      <div>
        <button
          className="complete"
          onClick={() => {
            completeTodo(todo.id);
          }}
        >
          Completar{" "}
        </button>
        <button
          className="delete"
          onClick={() => {
            removeTodo(todo.id);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
