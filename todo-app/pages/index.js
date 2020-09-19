import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button, Card, Typography } from "antd";
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
          <Col span={16}>
            <Input placeholder="TODO" value={todoText} onChange={handleText} />
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                addTodo(todoText);
              }}
              style={{ width: "100%" }}
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
            >
              Add
            </Button>
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                addTodo(todoText);
              }}
              danger
              onClick={clearList}
              style={{ width: "100%" }}
              type="primary"
              shape="round"
              icon={<DeleteOutlined />}
            >
              Remove all
            </Button>
          </Col>
        </Row>
      </div>
      <div className="todos">
        {todoList.map((a, i) => (
          <Card hoverable>
            <Row>
              <Col span={23}>
                <Typography.Text strong>{a}</Typography.Text>
              </Col>
              <Col span={1}>
                <Button
                  onClick={() => {
                    addTodo(todoText);
                  }}
                  danger
                  onClick={clearList}
                  type="primary"
                  shape="circle"
                  icon={<DeleteOutlined />}
                  onClick={() => removeItem(a)}
                />
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
}
