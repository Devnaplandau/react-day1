import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./component/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc ReactJS",
      thumbnaiUrl:
        "https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg",
    },
    {
      id: 2,
      name: "Nhạc Redux",
      thumbnaiUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2htE1q3dYsOdv_kbNtPRDDzeEnT1G5u-OSzoTKTDcursQbgAwDz40lBUX3UbfodAPVI&usqp=CAU",
    },
    {
      id: 3,
      name: "Nhạc Javascript",
      thumbnaiUrl:
        "https://nordiccoder.com/app/uploads/2019/12/50-javascript.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ hẹo đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
