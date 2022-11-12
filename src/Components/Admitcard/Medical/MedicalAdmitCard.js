import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filtering from '../../Application/Engineering/Filtering';
import ResNavbar from '../../Navbar/ResNavbar';
import Footer from '../../Body/Section_6/Footer';
import MedicalAc from './MedicalAc';
import { BaseUrl } from "../../baseurl/baseurl";
import { useLocation } from "react-router-dom"

function MedicalAdmitCard() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [mAdmitCard, setMAdmitCard] = useState([]);


  const gettingCategory = (categData) => {
    getApiData(categData);
  }

  const getApiData = async (categData) => {
    await axios.get(`${BaseUrl}/getAdmitMed?category=${categData}`).then((res, req) => {
      setMAdmitCard(res.data);
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

          <div className='fil'><Filtering gettingCategory={gettingCategory} mAdmitCard={mAdmitCard} setMAdmitCard={setMAdmitCard} /></div>
          <div className='multiple'>
            { mAdmitCard.length === 0 ? (<p className='data-not-found'>Data Not Found!</p>) :
              mAdmitCard.map((item) => {
                const { college_name, college_logo, college_address, web_link } = item;
                return (
                  <>
                    <div className='exm'><MedicalAc
                      // CollegeName={CollegeName}
                      // CollegeImg={CollegeImg}
                      ExamLogo={college_logo}
                      ExamName={college_name}
                      ExamsLink={web_link}
                      CollegeAddress={college_address}
                    // category={category}
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

export default MedicalAdmitCard