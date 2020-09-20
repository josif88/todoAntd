import { Button, Card, Image, Row, Typography, Tag } from "antd";
import { FullscreenOutlined, DownloadOutlined } from "@ant-design/icons";

const PhotoCard = ({ id, download_url, author, height, width, url }) => {
  return (
    <Card hoverable key={id}>
      <Row>
        <Image src={download_url} />
      </Row>
      <div style={{ padding: 20 }}>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Tag style={{ marginRight: 5 }} color="gold">
            Author
          </Tag>
          <Typography.Text strong>{author}</Typography.Text>
          <Button
            type="link"
            onClick={() => {
              window.open(url, "_blank");
            }}
          >
            Profile
          </Button>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "10px 0",
          }}
        >
          <FullscreenOutlined />
          <span>{`h:${height} w:${width}`}</span>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Button
            type="primary"
            block
            icon={<DownloadOutlined />}
            onClick={() => {
              window.open(download_url, "_blank");
            }}
          >
            Download
          </Button>
        </Row>
      </div>
    </Card>
  );
};

export default PhotoCard;
