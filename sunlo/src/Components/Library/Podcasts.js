import "./Podcasts.css";
import React from "react";
import { BsFillMicFill } from "react-icons/bs";

function Podcasts() {
  return (
    <div className="podcast-container">
      <div className="desc-container">
        <div className="icons">
          <BsFillMicFill className="ic-elem" />
        </div>
        <h2>Follow your first podcast</h2>
        <h6>Follow podcast you like by taping the follow button</h6>
        <p>
          <span>Find Podcast</span>
        </p>
      </div>
      <div className="pod-container">
        <div className="header">
          <h2>Top Podcasts</h2>
        </div>
        <div className="pods"></div>
      </div>
    </div>
  );
}

export default Podcasts;
