import { Card, Avatar,Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const AlbumCard = ({ albumName, albumThump, singer, singerThump, url }) => {
  return (
      
    <Card
      hoverable
     
      cover={
        <a href={url} target="_blank">
          <img alt={albumName} src={albumThump} style={{ width: "100%" }} />
        </a>
      }
      actions={[
        <a href={url} target="_blank">
          <ShoppingCartOutlined key="buy" />
        </a>,
      ]}
    >
        <Typography.Text strong style={{marginBottom:20,width:'100%'}}>{albumName}</Typography.Text>
      <Meta
        avatar={<Avatar src={singerThump} />}
        albumName={albumName}
        description={singer}
      />
    </Card>
  );
};

export default AlbumCard;
