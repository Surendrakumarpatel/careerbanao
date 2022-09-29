import React from 'react';
import {useNavigate} from "react-router-dom";
import SwipeRightIcon from '@mui/icons-material/SwipeRight';

function ECounsellingLink({college_logo, college_name,Intro,latest_news,news_event, apply_link}) {
    const navigate = useNavigate();
    const switchToApplyHomePage = () =>{
        navigate("/applyhome",{state:{id:1,intro:Intro,latest_news:latest_news,news_event:news_event,apply_link:apply_link}});
    }
    return (
        <div className='box-1'>
            <div className="collegeLogo ">
                <div><img className='clogo' src={college_logo}></img></div>
                <div><h1 className='college-name-text'>{college_name}</h1>
                </div>
            </div>
            <div className="counselling-links">
                <SwipeRightIcon className="clickicon" />
                <a onClick={switchToApplyHomePage}>click here</a>
            </div>
        </div>
    )
}

export default ECounsellingLink