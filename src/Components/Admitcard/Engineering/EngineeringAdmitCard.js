import React, { useState, useEffect } from 'react';
import axios from "axios";
import Footer from '../../Body/Section_6/Footer';
import Filtering from '../../Application/Engineering/Filtering';
import ResNavbar from '../../Navbar/ResNavbar';
import Ac from './Ac';
import { useLocation } from "react-router-dom"
import { BaseUrl } from "../../baseurl/baseurl";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

 
function EngineeringAdmitCard() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [eAdmitCard, setEAdmitCard] = useState([]);
  const [flag, setFlag] = useState(null);

  const gettingCategory = (categData) => {
    getApiData(categData);
  }

  const getApiData = async (categData) => {
    await axios.get(`${BaseUrl}/getAdmitEng?category=${categData}`).then((res, req) => {
      setEAdmitCard(res.data);
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

          <div className='fil'><Filtering gettingCategory={gettingCategory} eAdmitCard={eAdmitCard} setEAdmitCard={setEAdmitCard} /></div>
          <div className='multiple'>
            {flag === null ? (<Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open >
              <CircularProgress color="inherit" />
            </Backdrop>) :
              eAdmitCard.length === 0 ? "Data not found!" :
                eAdmitCard.map((item) => {
                  const { college_name, college_logo, college_address, web_link } = item;
                  return (
                    <> 
                     {/* Ac is component where all the data coming from EngineringAdmit card folder 
                     and calling every time using map function */}
                      <div className='exm'><Ac
                        // CollegeName={college_name}
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

export default EngineeringAdmitCard;