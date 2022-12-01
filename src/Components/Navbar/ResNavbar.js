import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ResNavbar.css";
import { motion } from "framer-motion";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GoogleButton from "react-google-button";
import { UserAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { BaseUrl } from '../baseurl/baseurl';


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
    const navigate = useNavigate();
    const { googleSignIn } = UserAuth();
    const { user, logOut } = UserAuth();
    const [open, setOpen] = useState(false);


    const handleGoogleSignIn = async () => {
        await googleSignIn();
        handleClose();
    }
    const logout = async () => {
        await logOut();
        navigate("/");
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [visit, setVisit] = useState(false);
    const visited = () => {
        setVisit(true);
    }
    const [navbar, setNavbar] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY >= 54) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }

    }
    window.addEventListener("scroll", changeBackgroundColor);
 
    return (
        <>
            <div>
                <nav className={navbar ? "navbar active" : "navbar"}>
                    {/* <!-- LOGO --> */}
                    <Link to="/"><div className="logo">CareerBanao</div></Link>
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
                                <a className={visit ? "visited-1" : "random"}>Application</a>
                                <ul className="dropdown" >
                                    <Link onClick={visited} style={{ color: "white" }} to="/engineering"><li >Engineering</li></Link>
                                    <Link style={{ color: "white" }} to="/medical"><li onClick={visited}>Medical</li></Link>
                                </ul>
                            </motion.li>
                            <motion.li className="services"
                                variants={item}
                            >
                                <a className="visited-2">Admit Card</a>
                                <ul className="dropdown">
                                    <Link style={{ color: "white" }} to="/engineeringadmitcard"><li>Engineering</li></Link>
                                    <Link style={{ color: "white" }} to="/medicaladmitcard"><li>Medical</li></Link>
                                </ul>
                            </motion.li>
                            <motion.li className="services"
                                variants={item}
                            >
                                <a className="visited-3">Result</a>
                                {/* <!-- DROPDOWN MENU --> */}
                                <ul className="dropdown">
                                    <Link style={{ color: "white" }} to="/engineeringresult"><li>Engineering</li></Link>
                                    <Link style={{ color: "white" }} to="/medicalresult"><li>Medical</li></Link>
                                </ul>
                            </motion.li>
                            <motion.li className="services"
                                variants={item}
                            >
                                <a className="visited-4">Counselling</a>
                                <ul className="dropdown" >
                                    {
                                        user ? (
                                            <>
                                                <Link to="/ecounselling" style={{ color: "white", cursor: "pointer" }}><li>Engineering</li></Link>
                                                
                                                <Link to="/mcounselling" style={{ color: "white", cursor: "pointer" }}><li>Medical</li></Link>
                                                
                                            </>
                                        ) :
                                            <>
                                                <li onClick={handleClickOpen}><a style={{ color: "white", cursor: "pointer" }}>Engineering</a></li>
                                                <li onClick={handleClickOpen}><a style={{ color: "white", cursor: "pointer" }}>Medical</a></li>
                                            </>
                                    }
                                </ul>
                            </motion.li>
                            <motion.li
                                variants={item}
                            ><Link to="/homeAPI" className="visited-5">Contact</Link></motion.li>
                            <div className='login_signup'>
                                {
                                    user ? (<>
                                        <Avatar className="user-img" alt="user" src={user.photoURL} />
                                        <button style={{ marginLeft: "1rem" }} onClick={logout}>Logout</button>
                                    </>
                                    ) :
                                        (<button onClick={handleClickOpen}>Login</button>)
                                }
                            </div>

                        </motion.div>
                    </ul>
                </nav>


            </div>
            {/* Login with google Dialog */}
            <div className="popup-dialog">
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Please Login To Continue"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <GoogleButton onClick={handleGoogleSignIn} style={{ margin: "auto" }} />
                        </DialogContentText>
                    </DialogContent>
                    <p className="instruction" style={{ margin: "auto", paddingBottom: "10px", color: "gray" }}>By creating this account, you agree to our Privacy Policy & Cookie Policy.</p>
                </Dialog>
            </div>
        </>

    )
}

export default ResNavbar;
