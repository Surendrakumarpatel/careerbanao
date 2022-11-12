import React, { useState, useEffect } from 'react';
import axios from "axios";
import ResNavbar from '../../Navbar/ResNavbar';
import "./ApplyHome.css";
import ApplyHomeSlider from './ApplyHomeSlider';
import Button from '@mui/material/Button';
import Footer from '../../Body/Section_6/Footer';
import { useLocation } from "react-router-dom";
import { BaseUrl } from '../../baseurl/baseurl';

function ApplyHome() {

  const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
  const newEvents = location.state.news_event;
  const allNewsEvent = newEvents.split(",");

  const [applyHomeData, setApplyHomeData] = useState([{
    introduction: "loading...",
    late_news: "loading...",
  }]);
  useEffect(() => {
    axios.get(`${BaseUrl}/getCounslingDetails`).then((res, req) => {
      //    console.log(res.data);
      setApplyHomeData(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }, []);


  return (
    <div>
      <ResNavbar />
      <ApplyHomeSlider />
      <div className="applyhome">
        <div className="letestnews">
          <div className='news-text-1'><h1>Letest News</h1></div>
          <marquee behavior="scroll" direction="left">{location.state.latest_news} <span className='ltn'>New</span></marquee>
        </div>
      </div>
      <div className='intro-and-news'>
        <div className='introduction'>
          <h1>Introduction</h1>
          <p>{location.state.intro}</p>
          <a href={location.state.apply_link} target="blank"><Button variant="contained" >Apply Now</Button></a>
        </div>
        <div className='news-and-events'>
          <h1>News & Events</h1>
          <ul>
          {
            allNewsEvent.map((items) => {
              return (
                <li>{items}</li>
              )
            })
          }
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ApplyHome