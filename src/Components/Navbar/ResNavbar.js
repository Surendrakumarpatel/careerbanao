import React, { useState } from 'react';
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
    const {user, logOut} = UserAuth();
    const [open, setOpen] = React.useState(false);
    const { googleSignIn } = UserAuth();

     

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
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
                                <a className={visit ? "visited-1" : "random"}>Application</a>
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
                                <ul className="dropdown" >
                                    <li onClick={handleClickOpen}><a style={{ color: "white", cursor: "pointer" }}>Engineering</a></li>
                                    <li onClick={handleClickOpen}><a style={{ color: "white", cursor: "pointer" }}>Medical</a></li>
                                </ul>
                            </motion.li>
                            <motion.li
                                variants={item}
                            ><Link to="/homeAPI" className="visited-5">Contact</Link></motion.li>
                            <div className='login_signup'>
                                <button>Login</button>
                            </div>
                        </motion.div>
                    </ul>
                </nav>


            </div>
            {/* Dialog */}
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
                            <GoogleButton onClick = {handleGoogleSignIn}  style={{ margin: "auto" }} />
                        </DialogContentText>
                    </DialogContent>
                    <p style={{ margin: "auto", paddingBottom: "10px", color: "gray" }}>By creating this account, you agree to our Privacy Policy & Cookie Policy.</p>
                </Dialog>
            </div>
        </>

    )
}

export default ResNavbar;
