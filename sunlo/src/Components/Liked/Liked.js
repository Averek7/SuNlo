import "./Liked.css";
import React from "react";
import { BsFillHeartFill, BsMusicNote } from "react-icons/bs";

function Liked() {
  return (
    <>
      <div className="display-container">
        <div className="icons">
          <BsFillHeartFill width={25} className="ico1" />
        </div>
        <div className="element">
          <h6>Playlist...</h6>
          <h1>Liked Songs</h1>
          <h6>Username....</h6>
        </div>
      </div>
      <div className="description-container">
        <BsMusicNote width={50} className="ico2" />
        <h4>Songs you like will appear here</h4>
        <h6>Save songs bt tapping the heart icon</h6>
        <p>
          <span>Find Songs</span>
        </p>
      </div>
    </>
  );
}

export default Liked;
