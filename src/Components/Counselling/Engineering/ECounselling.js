import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./ECounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';
import Footer from '../../Body/Section_6/Footer';
import ECounsellingLink from './ECounsellingLink';
import { BaseUrl } from '../../baseurl/baseurl';
import { useLocation } from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function ECounselling() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [eCounsellingData, setECounsellingData] = useState([]);
  const [flag, setFlag] = useState(null);
  useEffect(() => {
    axios.get(`${BaseUrl}/getCounslingDetails`).then((res, req) => {
      console.log(res.data);
      setECounsellingData(res.data);
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
          {
            flag === null ? (<Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open >
              <CircularProgress color="inherit" />
            </Backdrop>) :
              eCounsellingData.length === 0 ? "Data Not Found!" :
                eCounsellingData.map((items) => {
                  const { college_name, college_logo, web_link, lates_news, new_event, introduction } = items;
                  return (
                    <ECounsellingLink
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

export default ECounselling;