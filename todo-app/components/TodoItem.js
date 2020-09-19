import { Card, Row, Col, Button,Typography} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodoItem = ({ todoText, item, removeItem, addTodo }) => {
  return (
    <Card hoverable>
      <Row>
        <Col span={23}>
          <Typography.Text strong>{item}</Typography.Text>
        </Col>
        <Col span={1}>
          <Button
            onClick={() => {
              addTodo(todoText);
            }}
            danger        
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => removeItem(item)}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default TodoItem;
