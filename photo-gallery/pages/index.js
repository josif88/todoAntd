import { useState, useEffect } from "react";
import PhotoCard from "../components/photoCard";
import {Spin} from "antd";

let photoObj = {
  id: "0",
  author: "Alejandro Escamilla",
  width: 5616,
  height: 3744,
  url: "https://unsplash.com/photos/yC-Yzbqy7PY",
  download_url: "https://picsum.photos/id/0/5616/3744",
};

export default function Home() {
  let [photoList, setPhotoList] = useState([]);
  let [loadingFlag, setloadingFlag] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((resp) => resp.json())
      .then(setPhotoList)
      .then(() => {
        setloadingFlag(false);
      });
  }, []);

  return (
    <div>
      {loadingFlag ? (
        <div style={{width:'100%', height:'50vh' ,alignItems:'center',justifyContent:'center',display:"flex"}}>
         <Spin size="large" />
        </div>
      ) : (
        <div className="container">
          {photoList.map((photo) => (
            <PhotoCard {...photo} />
          ))}
        </div>
      )}
    </div>
  );
}
