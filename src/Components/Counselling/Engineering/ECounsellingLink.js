import React from 'react';
import { useNavigate } from "react-router-dom";
import SwipeRightIcon from '@mui/icons-material/SwipeRight';

function ECounsellingLink({ college_logo, college_name, Intro, latest_news, news_event, apply_link }) {
    const navigate = useNavigate();
    const switchToApplyHomePage = () => {
        navigate("/applyhome", { state: { id: 1, intro: Intro, latest_news: latest_news, news_event: news_event, apply_link: apply_link } });
    }
    return (
        <li className="cards_item">
            <div className="card">
                <div className="card_image">
                    <div className='box'>
                       <img className='clogo' src={college_logo}></img>
                       <h1 className='college-name-text'>{college_name}</h1>
                    </div>
                     <div className="counselling-links">
                         <SwipeRightIcon className="clickicon" />
                         <a className='click-here' onClick={switchToApplyHomePage}>click here</a>
                     </div>
                </div>
            </div>
        </li>
    )
}

export default ECounsellingLink