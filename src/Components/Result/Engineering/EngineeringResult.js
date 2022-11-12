import React, { useState, useEffect } from 'react';
import axios from "axios";
import Filtering from '../../Application/Engineering/Filtering';
import ResNavbar from '../../Navbar/ResNavbar';
import Results from './Results';
import Footer from '../../Body/Section_6/Footer';
import { BaseUrl } from '../../baseurl/baseurl';
import { useLocation } from "react-router-dom"

function EngineeringResult() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [eResult, setEResult] = useState([]);

  const gettingCategory = (categData) => {
    getApiData(categData);
  }

  const getApiData = async (categData) => {
    await axios.get(`${BaseUrl}/getResultEng?category=${categData}`).then((res, req) => {
      setEResult(res.data);
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

          <div className='fil'><Filtering gettingCategory={gettingCategory} eResult={eResult} setEResult={setEResult} /></div>
          <div className='multiple'>
            { eResult.length === 0 ? (<p className='data-not-found'>Data Not Found!</p>) :
              eResult.map((item) => {
                const { college_logo, college_name, web_link, college_category, college_address } = item;
                return (
                  <>
                    <div className='exm'><Results
                      // CollegeName={}
                      // CollegeImg={CollegeImg}
                      ExamLogo={college_logo}
                      ExamName={college_name}
                      web_link={web_link}
                      CollegeAddress={college_address}
                      category={college_category}
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

export default EngineeringResult