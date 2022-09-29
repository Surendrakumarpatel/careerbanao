import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./ECounselling.css";
import ResNavbar from '../../Navbar/ResNavbar';
import Footer from '../../Body/Section_6/Footer';
import ECounsellingLink from './ECounsellingLink';
 
function ECounselling() {
   const [eCounsellingData, setECounsellingData] = useState([]);
   useEffect(() => {
    axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/getCounslingDetails").then((res, req) => {
     console.log(res.data);
     setECounsellingData(res.data); 
      
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
                            eCounsellingData.map((items) => {
                                const { college_name, college_logo,web_link, lates_news, new_event,introduction } = items;
                                return (
                                     <ECounsellingLink
                                     college_logo={college_logo}
                                     college_name = {college_name}
                                     Intro = {introduction}
                                     latest_news = {lates_news}
                                     news_event = {new_event}
                                     apply_link = {web_link}
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

export default ECounselling;