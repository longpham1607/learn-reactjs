import React from "react";
import PropTypes from "prop-types";
import AlbumList from "../components/AlbumList";

function AlbumFreature(props) {
  const albumList = [
    {
      id: 1,
      title: "test1",
      thumbnailUrl:
        "https://i.ytimg.com/vi/v6gXdM9_cIY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5_jaQLCri9AN4PUVyP0DSsdWCLw",
    },
    {
      id: 2,
      title: "test2",
      thumbnailUrl:
        "https://i.ytimg.com/vi/v6gXdM9_cIY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5_jaQLCri9AN4PUVyP0DSsdWCLw",
    },
    {
      id: 3,
      title: "test3",
      thumbnailUrl:
        "https://i.ytimg.com/vi/v6gXdM9_cIY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5_jaQLCri9AN4PUVyP0DSsdWCLw",
    },
  ];
  return (
    <div>
      <h2>Co the ban se thich</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

AlbumFreature.propTypes = {};

export default AlbumFreature;
