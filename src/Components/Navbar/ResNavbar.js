import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ResNavbar.css";
import {motion} from "framer-motion";


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  

function ResNavbar() {
    const [navbar, setNavbar] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY >= 64) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }

    }
    window.addEventListener("scroll", changeBackgroundColor);

    return (
        <div>
            <nav className={navbar ? "navbar active" : "navbar"}>
                {/* <!-- LOGO --> */}
                <div className="logo">CareerBanao</div>
                {/* <!-- NAVIGATION MENU --> */}
                <ul className="nav-links">
                    {/* <!-- USING CHECKBOX HACK --> */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    {/* <!-- NAVIGATION MENUS --> */}
                    <motion.div className="menu"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    >
                        <motion.li 
                        variants={item}
                        ><Link to="/">Home</Link></motion.li>
                        <motion.li className="services"
                        variants={item}
                        >
                            <li>Application</li>
                            <ul className="dropdown" >
                                <li><Link style={{ color: "white" }} to="/engineering">Engineering</Link></li>
                                <li><Link style={{ color: "white" }} to="/medical">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li className="services"
                        variants={item}
                        >
                            <li>Result</li>
                            {/* <!-- DROPDOWN MENU --> */}
                            <ul className="dropdown">
                                <li><Link style={{ color: "white" }} to="/engineeringresult">Engineering</Link></li>
                                <li><Link style={{ color: "white" }} to="/medicalresult">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li className="services"
                        variants={item}
                        >
                            <li>Admit Card</li>
                            <ul className="dropdown">
                                <li><Link style={{ color: "white" }} to="/engineeringadmitcard">Engineering</Link></li>
                                <li><Link style={{ color: "white" }} to="/medicaladmitcard">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li className="services"
                        variants={item}
                        >
                            <li>Counselling</li>
                            <ul className="dropdown">
                                <li><Link style={{ color: "white" }} to="/counselling">Engineering</Link></li>
                                <li><Link style={{ color: "white" }} to="/">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li
                        variants={item}
                        ><li>Contact</li></motion.li>
                        <div className='login_signup'>
                            <button>Login</button>
                        </div>
                    </motion.div>
                </ul>
            </nav>
        </div>
    )
}

export default ResNavbar;
