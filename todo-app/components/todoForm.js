import { Row, Col, Input, Button, } from "antd";
import { PlusOutlined, DeleteOutlined, } from "@ant-design/icons";

const TodoForm = ({addTodo,todoText,handleText,clearList}) => {
  return (
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
              clearList();
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
  );
};

export default TodoForm;
