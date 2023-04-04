import React from "react";
import "./Navbar.css";
// import logo from "../../assets/SunLO.png";
import logo from "../../assets/logo.png";
import { BsFillPersonFill } from "react-icons/bs";

const code = new URLSearchParams(window.location.search).get("code");
const AUTH_URL =
  "https://accounst.spotify.com/authorize?client_id=3452dcaaaffa4f279eb9f6f1a7354a54&response_typr=code&redirect_uri=http://localhost:3000&csope=streaming%user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Navbar = () => {
  return (
    <div className="container">
      <div className="Nav">
        <div className="left">
          <img
            className="logo"
            src={logo}
            alt=""
            srcset=""
            height={90}
            width={90}
          />
        </div>
        <div className="right">
          <div className="elem">
            <BsFillPersonFill size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
