import React from "react";
import "./Card.css";
import music from "../../Assests/music.jpg";
// import { Button } from "react-bootstrap";
const Card = () => {
  return (
    <div className="card-con">
      <div class="card card-box">
        <img class="card-img-top card-img" src={music} alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">Alok kumar</h4>
          <p class="card-text">Some example text.</p>
          <a href="#" class="btn btn-primary">
            Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
