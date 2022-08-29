import React, { useState } from 'react'
import "./ECounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';
import Menu from './ExamData';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import Footer from '../../Body/Section_6/Footer';
import { Link } from 'react-router-dom';
import Data from './ECounsellingData';

function ECounselling() {
    const [counsellingData, setCounsellingData] = useState(Data);

    return (
        <div>
            <ResNavbar />
            <div className="grid-boxes">
                <div className='c-and-social'>
                    <div className='admission-and-counselling'><h1>Admission And Counselling</h1></div>
                    <div class="grid">
                        {
                            counsellingData.map((items) => {
                                const { collegeName, collegeLogo, counsellingUrl } = items;
                                return (
                                    <div className='box-1'>
                                        <div className="collegeLogo ">
                                            <div><img className='clogo' src={Menu[2].ExamLogo}></img></div>
                                            <div><h1 className='college-name-text'>{collegeName}</h1>
                                            </div>
                                        </div>
                                        <div className="counselling-links">
                                            <SwipeRightIcon className="clickicon" />
                                            <Link to="/applyhome">{counsellingUrl}</Link>
                                        </div>
                                    </div>
                                );
                            })
                        }

                        {/* <div className='box-1'>
                            <div className="collegeLogo ">
                                <div><img className='clogo' src={Menu[2].ExamLogo}></img></div>
                                <div><h1 className='college-name-text'>Indian Institute of technology Bombay.</h1>
                                </div>
                            </div>
                            <div className="counselling-links">
                                <SwipeRightIcon className="clickicon" />
                                <Link to="/applyhome">IIT Bomabay Counselling through JOSSA</Link>
                            </div>
                        </div>
                        <div className='box-1'>
                            <div className="collegeLogo ">
                                <div><img className='clogo' src={Menu[2].ExamLogo}></img></div>
                                <div><h1 className='college-name-text'>Indian Institute of technology Bombay.</h1>
                                </div>
                            </div>
                            <div className="counselling-links">
                                <SwipeRightIcon className="clickicon" />
                                <Link to="/applyhome">IIT Bomabay Counselling through JOSSA</Link>
                            </div>
                        </div>
                        <div className='box-1'>
                            <div className="collegeLogo ">
                                <div><img className='clogo' src={Menu[2].ExamLogo}></img></div>
                                <div><h1 className='college-name-text'>Indian Institute of technology Bombay.</h1>
                                </div>
                            </div>
                            <div className="counselling-links">
                                <SwipeRightIcon className="clickicon" />
                                <Link to="/applyhome">IIT Bomabay Counselling through JOSSA</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ECounselling;