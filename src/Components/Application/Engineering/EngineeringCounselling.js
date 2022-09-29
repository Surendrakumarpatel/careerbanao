import React, { useState, useEffect } from 'react';
import axios from "axios";
import Footer from '../../Body/Section_6/Footer';
import Exams from './Exams';
import Filtering from './Filtering';
import "./EngineeringCounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';

function EngineeringCounselling() {
  const [items, setItems] = useState([]);
  
  const gettingCategory =  (categData) =>{
    getApiData(categData);
  }
 
  const getApiData = async (categData) => {
    await axios.get(`https://kalkaprasad.com/careerbanao/index.php/APIBase/getApplicationDetailsEng?category=${categData}`).then((res, req)=>{
        setItems(res.data);
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
          <div className='multiple'>
            {
              items.map((item) => {
                const { college_name, college_logo, apply_link, college_address, Last_date, college_category, latest_news, news_event, Introduction } = item;
                return (
                  <>
                    <div className='exm'><Exams
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
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EngineeringCounselling