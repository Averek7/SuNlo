import React from "react";
import './LeftNav.css'
import { AiFillHome ,AiOutlineSearch} from 'react-icons/ai';
import { BiLibrary} from 'react-icons/bi';
import { FcLike} from 'react-icons/fc';
const LeftNav = () => {
    return (
        <div className="con">
        <p className="con-p"><AiFillHome/> Home</p>
        <p className="con-p"><AiOutlineSearch/> Search</p>
        <p className="con-p"><BiLibrary/> Your Library</p>
        <p className="con-p"><FcLike/> Liked Music</p>
        </div>
    )
}

export default LeftNav;