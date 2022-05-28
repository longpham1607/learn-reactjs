import React from "react";
import "./style.scss";
function AlbumItem({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.title} />
      </div>
      <p className="album__title">{album.title}</p>
    </div>
  );
}

AlbumItem.propTypes = {};

export default AlbumItem;
