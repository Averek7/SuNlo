import React, { useState } from "react";
// import Layout from "./Layout";
import { FaHome } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import "./LeftNav.css";
import Home from "../Home";
import Library from "../Library";
import Liked from "../Liked";

const tabs = [
  {
    name: "Home",
    icon: <FaHome size={30} className="icons" />,
  },
  {
    name: "Your Library",
    icon: <BiLibrary size={30} className="icons" />,
  },
  {
    name: "Liked Music",
    icon: <FcLike size={30} className="icons" />,
  },
];
function Dashboard({ code }) {
  const [tab, setTab] = useState("Home");

  return (
    <div className="main_container">
      <div className="con1">
        <div className="con2">
          {tabs.map((item) => (
            <div
              className="con3"
              onClick={() => setTab(item.name)}
              style={item.name === tab ? { color: "#004AAD" } : null}
            >
              {item.icon}
              <h4>{item.name}</h4>
            </div>
          ))}
          <div className="con4">
            <div className="ic2">
              <h5>SUPPORT</h5>
            </div>
            <div className="ic2">
              <h5>FAQ</h5>
            </div>
            <div className="ic2">
              <h5>TERMS & CONDITIONS</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="detailContainer">
        {tab === "Home" ? (
          <Home />
        ) : tab === "Your Library" ? (
          <Library />
        ) : tab === "Liked Music" ? (
          <Liked />
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
