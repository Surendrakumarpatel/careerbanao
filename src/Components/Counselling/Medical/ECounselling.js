import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./ECounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import Footer from '../../Body/Section_6/Footer';
import { Link } from 'react-router-dom';
import MCounsellingLink from './MCounsellingLink';

function MCounselling() {
    const [mCounsellingData, setMCounsellingData] = useState([]);
    useEffect(() => {
        axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/getCounslingDetailsMed").then((res, req) => {
            console.log(res.data);
            setMCounsellingData(res.data);

        }).catch((err) => {
            console.log(err);
        })

    }, []);

    return (
        <div>
            <ResNavbar />
            <div className="grid-boxes">
                <div className='c-and-social'>
                    <div className='admission-and-counselling'><h1>Admission And Counselling</h1></div>
                    <div class="grid">
                        {
                            mCounsellingData.map((items) => {
                                const { college_name, college_logo, lates_news, new_event,web_link, introduction } = items;
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MCounselling;