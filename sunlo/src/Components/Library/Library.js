import "./Library.css";
import React, { useState } from "react";
import Playlists from "./Playlists";
import Podcasts from "./Podcasts";
import Artists from "./Artists";
import Album from "./Album";

const tabs = [
  {
    name: "Playlists",
  },
  {
    name: "Podcasts",
  },
  {
    name: "Artists",
  },
  {
    name: "Album",
  },
];

function Library() {
  const [tab, setTab] = useState("Playlists");
  return (
    <div>
      <div className="lib-container">
        <div className="lib-list-con">
          {tabs.map((item) => (
            <div
              className="list-tab"
              onClick={() => setTab(item.name)}
              style={item.name === tab ? { color: "#004AAD" } : null}
            >
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
        <div className="libDetailContainer">
          {tab === "Playlists" ? (
            <Playlists />
          ) : tab === "Podcasts" ? (
            <Podcasts />
          ) : tab === "Artists" ? (
            <Artists />
          ) : tab === "Album" ? (
            <Album />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Library;
