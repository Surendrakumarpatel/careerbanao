import React, { useState, useEffect } from 'react';
import axios from "axios";
import Footer from '../../Body/Section_6/Footer';
import Exams from './Exams';
import Filtering from './Filtering';
import "./EngineeringCounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';
import {BaseUrl} from "../../baseurl/baseurl";
import { useLocation } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
 

function EngineeringCounselling() {
  const location = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);
  const [items, setItems] = useState([]);
  const [flag, setFlag] = useState(null);
  const length = items.length;
  console.log("array length: "+ length);
  const gettingCategory =  (categData) =>{
    getApiData(categData);
  }
  const getApiData = async (categData) => {
    await axios.get(`${BaseUrl}/getApplicationDetailsEng?category=${categData}`).then((res, req)=>{
        setItems(res.data);
        setFlag(res);
    });
  }
  useEffect(() => {
    getApiData("");
  }, []);
  
  return (
    <div className='engineering-c'>
      <ResNavbar />
      <div className='exam-section'>
        <div className='filter-collegeExam'>
          <div className='fil'><Filtering gettingCategory = {gettingCategory} items={items} setItems={setItems}/></div>
          <div className= 'multiple'>
            {
              flag === null ? (<Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open >
                <CircularProgress color="inherit" />
              </Backdrop>) :
              items.length === 0 ? "Data not found!" :
              (items.map((item) => {
                const {id,college_name, college_logo, apply_link, college_address, Last_date, college_category, latest_news, news_event, Introduction } = item;
                
                return (
                  <>
                    <div className='exm'><Exams
                      id = {id}
                      college_name={college_name}
                      college_logo={college_logo}
                      apply_link={apply_link}
                      college_address={college_address}
                      Last_date={Last_date}
                      college_category={college_category}
                      latest_news={latest_news}
                      news_event={news_event}
                      Intro={Introduction}
                    /></div>
                    
                  </>
                )
              }))
             
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EngineeringCounselling