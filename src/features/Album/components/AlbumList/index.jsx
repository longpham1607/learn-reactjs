import PropTypes from "prop-types";
import React from "react";
import AlbumItem from "../AlbumItem";
import "./style.scss";
function AlbumList({ albumList }) {
  return (
    <div>
      <ul className="album-list">
        {albumList.map((album) => (
          <li key={album.id} >
            <AlbumItem album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

export default AlbumList;
