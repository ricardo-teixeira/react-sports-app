import React from "react";
import "./album.css";

const Album = ({ title, photos }) => (
  <div className="album">
    <h3 className="title">{title}</h3>
    <div className="photos flex-grid flex-wrap">
      {photos.map(photo => (
        <a
          key={photo.id}
          className="photo-card"
          href={photo.url}
          target="_blank"
        >
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </a>
      ))}
    </div>
  </div>
);

export default Album;
