import React from "react";
import ArtworkPlay from "../components-chid/artwork-play/ArtworkPlay";
import SongDetails from "../components-chid/song-details/songDetails";

export default function History() {
  return (
    <div className="history">
      <div className="history__overlay" role="button"></div>
      <div className="history__main">
        <div className="history__header">
          <div className="history__header__title">Recently Played</div>
          <div className="history__header__close" role="button">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="history__songs">
          <SongDetails>
            <ArtworkPlay />
          </SongDetails>
        </div>
      </div>
    </div>
  );
}
