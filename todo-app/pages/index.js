import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

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
      <div className="form">
        <Row gutter={20}>
          <Col span={17}>
            <Input placeholder="TODO" value={todoText} onChange={handleText} />
          </Col>
          <Col span={4}>
            <Button
              style={{ width: "100%" }}
              onClick={() => {
                addTodo(todoText);
              }}
            >
              Add
            </Button>
          </Col>
          <Col span={3}>
            <Button style={{ width: "100%" }} danger onClick={clearList}>
              Remove all
            </Button>
          </Col>
        </Row>
      </div>
      <div class="todos">
        {todoList.map((a) => (
          <Card>
            <Row>
              <Col span={21}>
                <h3>{a}</h3>
              </Col>
              <Col span={3}>
                <Button style={{ width: "100%" }} onClick={() => removeItem(a)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
}
