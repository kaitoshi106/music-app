import React from "react";
import Slider from "../components-chid/slider/Slider";
import SongDetails from "../components-chid/song-details/songDetails";

export default function Player() {
  return (
    <div className="player">
      <div className="player__inner container">
        <div className="player__section player__section--song">
          <SongDetails className="player__song" />
        </div>
        <div className="player__section">
          <div className="player__buttons">
            <div className="player__button">
              <i className="fas fa-backward" />
            </div>
            <div className="player__button" role="button">
              <i className="fas" />
            </div>
            <div className="player__button">
              <i className="fas fa-forward" />
            </div>
          </div>
        </div>
        <div className="player__section player__section--time">
          <div className="player__time"></div>
        </div>
        <div className="player__section player__section--slider">
          <Slider />
        </div>
        <div className="player__section player__section--time">
          <div className="player__time"></div>
        </div>
        <div className="player__section player__section__toggle-volume">
          <div className="player__button" title="Shuffle">
            <i className="fas fa-random" />
          </div>
          <div className="player__button" title="Repeat One">
            <i className="fas fa-sync-alt" />
          </div>
          <div className="player__button" title="History">
            <i className="fas fa-list-alt" />
          </div>
          <div className="player__button">
            <i className="fas"></i>
          </div>
        </div>
        <div className="player__section player__section--volume">
          <Slider />
        </div>
      </div>
    </div>
  );
}
