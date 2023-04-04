import React, { useState } from "react";
import Layout from "./Layout";
import { FaHome } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const tabs = [
  {
    name: "Home",
    icon: <FaHome size={20} className="icons" />,
  },
  {
    name: "Your Library",
    icon: <BiLibrary size={20} className="icons" />,
  },
  {
    name: "Liked Music",
    icon: <FcLike size={20} className="icons" />,
  },
];
function Dashboard({ code }) {
  const [tab, setTab] = useState("Home");

  return (
    <Layout>
      <>
        {tabs.map((item) => (
          <div
            onClick={() => setTab(item.name)}
            style={item.name === tab ? { color: "#9925ad" } : null}
          >
            {item.icon}
            <h4>{item.name}</h4>
          </div>
        ))}
      </>
    </Layout>
  );
}

export default Dashboard;
