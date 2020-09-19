import AlbumCard from "../components/albumCard";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const album = {
  title: "Taylor Swift",
  artist: "Taylor Swift",
  url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
  image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
};

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  let [albumList, setAlbumList] = useState([]);
  let [loadingFlag, setLoadingFlag] = useState(true);

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://rallycoding.herokuapp.com/api/music_albums", requestOptions)
      .then((resp) => resp.json())
      .then((result) => {
        setAlbumList(result);
        setLoadingFlag(false);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 20 }}>Online Music Store</h1>

      {loadingFlag ? (
        <div
          style={{
            width: "100%",
            height: "50vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="container">
          {albumList.map((item, index) => {
            return (
              <AlbumCard
                albumName={item.title}
                albumThump={item.image}
                singer={item.artist}
                singerThump={item.thumbnail_image}
                url={item.url}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
