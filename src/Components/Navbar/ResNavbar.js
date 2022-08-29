import React, { useEffect, useState } from 'react';
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
    const [visit, setVisit] = useState(false);
     const visited = () =>{
        console.log("ho gya kaam");
        setVisit(true);
     }
    const [navbar, setNavbar] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY >= 64) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }

    }
    console.log("checking color: "+ visit);
    
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
                            <a className = {visit ? "visited-1" :"random"}>Application</a>
                            <ul className="dropdown" >
                                <li ><Link onClick={visited} style={{ color: "white" }} to="/engineering">Engineering</Link></li>
                                <li onClick={visited}><Link style={{ color: "white" }} to="/medical">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li className="services"
                        variants={item}
                        >
                            <a className="visited-2">Admit Card</a>
                            <ul className="dropdown">
                                <li><Link style={{ color: "white" }} to="/engineeringadmitcard">Engineering</Link></li>
                                <li><Link style={{ color: "white" }} to="/medicaladmitcard">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li className="services"
                        variants={item}
                        >
                            <a className="visited-3">Result</a>
                            {/* <!-- DROPDOWN MENU --> */}
                            <ul className="dropdown">
                                <li><Link style={{ color: "white" }} to="/engineeringresult">Engineering</Link></li>
                                <li><Link style={{ color: "white" }} to="/medicalresult">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li className="services"
                        variants={item}
                        >
                            <a className="visited-4">Counselling</a>
                            <ul className="dropdown">
                                <li><Link style={{ color: "white" }} to="/counselling">Engineering</Link></li>
                                <li><Link style={{ color: "white" }} to="/counselling">Medical</Link></li>
                            </ul>
                        </motion.li>
                        <motion.li
                        variants={item}
                        ><Link to="/contact" className="visited-5">Contact</Link></motion.li>
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
