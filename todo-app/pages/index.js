import React, { useState, useEffect } from "react";

import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

export default function Home() {
  const [todoText, setToDoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleText = (obj) => {
    setToDoText(obj.target.value);
  };

  const addTodo = (todo) => {
    setTodoList([todo, ...todoList]);
    setToDoText("");
    localStorage.setItem("todos", JSON.stringify([todo, ...todoList]));
  };

  const clearList = () => {
    setTodoList([]);
    localStorage.setItem("todos", "");
  };

  const removeItem = (item) => {
    setTodoList(todoList.filter((el) => el !== item));

    localStorage.setItem(
      "todos",
      JSON.stringify(todoList.filter((el) => el !== item))
    );
  };

  useEffect(() => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      setTodoList(JSON.parse(todos));
    }
  }, []);

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} todoText={todoText} handleText={handleText} clearList={clearList} />
      <div className="todos">
        {todoList.map((a, i) => (
          <TodoItem
            key={i}
            todoText={todoText}
            item={a}
            removeItem={removeItem}
            addTodo={addTodo}
            clearList={clearList}
          />
        ))}
      </div>
    </div>
  );
}
