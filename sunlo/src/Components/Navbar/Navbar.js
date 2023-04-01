import React from 'react'
import './Navbar.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiGnuprivacyguard } from 'react-icons/si';

const Navbar = ()=>{
   return(
    <div className='container'>
        <div className='Nav'>
            <div className='left'>
                <p className='logo'>SUN_LO</p>
                </div>
            <div className='right'>
                <p className='right-p'>About</p>
                <p className='right-p'><span><BsFillPersonFill/> Login</span></p>
                <p className='right-p'><span><SiGnuprivacyguard/> SignUp</span></p>
            </div>
        </div>
    </div>
   )
}

export default Navbar;