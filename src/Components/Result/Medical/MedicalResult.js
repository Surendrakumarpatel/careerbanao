import React, { useState, useEffect } from 'react';
import axios from "axios";
import Filtering from '../../Application/Engineering/Filtering';
import ResNavbar from '../../Navbar/ResNavbar';
// import Results from './MedicalResults';
import MedicalResults from './MedicalResults';
import Footer from '../../Body/Section_6/Footer';
import { BaseUrl } from '../../baseurl/baseurl';
import { useLocation } from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function MedicalResult() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [mResult, setMResult] = useState([]);
  const [flag, setFlag] = useState(null);

  const gettingCategory = (categData) => {
    getApiData(categData);
  }

  const getApiData = async (categData) => {
    await axios.get(`${BaseUrl}/getResultMed?category=${categData}`).then((res, req) => {
      setMResult(res.data);
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

          <div className='fil'><Filtering gettingCategory={gettingCategory} mResult={mResult} setMResult={setMResult} /></div>
          <div className='multiple'>
            {flag === null ? (<Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open >
              <CircularProgress color="inherit" />
            </Backdrop>) :
              mResult.length === 0 ? "Data not found!" :
                mResult.map((item) => {
                  const { college_logo, college_name, web_link, college_category, college_address } = item;
                  return (
                    <>
                      <div className='exm'><MedicalResults
                        // CollegeName={CollegeName}
                        // CollegeImg={CollegeImg}
                        ExamLogo={college_logo}
                        ExamName={college_name}
                        ExamsLink={web_link}
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

export default MedicalResult