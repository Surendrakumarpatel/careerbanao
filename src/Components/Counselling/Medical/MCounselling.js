import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./ECounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import Footer from '../../Body/Section_6/Footer';
import { Link } from 'react-router-dom';
import MCounsellingLink from './MCounsellingLink';
import { BaseUrl } from '../../baseurl/baseurl';
import { useLocation } from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function MCounselling() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const [mCounsellingData, setMCounsellingData] = useState([]);
    const [flag, setFlag] = useState(null);
    useEffect(() => {
        axios.get(`${BaseUrl}/getCounslingDetailsMed`).then((res, req) => {
            setMCounsellingData(res.data);
            setFlag(res);
        }).catch((err) => {
            console.log(err);
        })

    }, []);

    return (
        <div>
            <ResNavbar />
            <div className="main">
                <h1 className='a-and-c'>Admission and Counselling</h1>
                <ul className="cards">
                    {flag === null ? (<Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open >
              <CircularProgress color="inherit" />
            </Backdrop>) :
                     mCounsellingData.length === 0 ? "No data found!" :
                        mCounsellingData.map((items) => {
                            const { college_name, college_logo, web_link, lates_news, new_event, introduction } = items;
                            return (
                                <MCounsellingLink
                                    college_logo={college_logo}
                                    college_name={college_name}
                                    Intro={introduction}
                                    latest_news={lates_news}
                                    news_event={new_event}
                                    apply_link={web_link}
                                />
                            );
                        })
                    }
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default MCounselling;