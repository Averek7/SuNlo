import "./Home.css";
import React from "react";
import Card from "../Card/Card";

function Home() {
  return (
    <div className="side-container">
      <div className="music-container">
        <div className="header">Trending</div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="music-container">
        <div className="header">Weekly Hit</div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="music-container">
        <div className="header">Recently Played</div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
