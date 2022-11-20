import React, { useState, useEffect } from 'react';
import axios from "axios";
import Filtering from "../Engineering/Filtering";
import ResNavbar from '../../Navbar/ResNavbar';
import MedicalExams from './MedicalExams';
import Footer from '../../Body/Section_6/Footer';
import { BaseUrl } from "../../baseurl/baseurl";
import { useLocation } from "react-router-dom"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function MedicalCounselling() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const [medicalData, setMedicalData] = useState([]);
    const [flag, setFlag] = useState(null);

    const gettingCategory = (categData) => {
        getApiData(categData);
    }

    const getApiData = async (categData) => {
        await axios.get(`${BaseUrl}/getApplicationDetailsMed?category=${categData}`).then((res, req) => {
            setMedicalData(res.data);
            setFlag(res);
        });
    }
    useEffect(() => {
        getApiData("");
    }, []);

    return (
        <div>
            <ResNavbar />
            <section className='exam-section'>
                <div className='filter-collegeExam'>
                    <div className='fil'><Filtering gettingCategory={gettingCategory} medicalData={medicalData} setMedicalData={setMedicalData} /></div>
                    <div className='multiple'>

                        {flag === null ? (<Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open >
                            <CircularProgress color="inherit" />
                        </Backdrop>) :
                            medicalData.length === 0 ? "Data not found!" :
                                medicalData.map((item) => {
                                    const { college_name, college_logo, apply_link, college_address, Last_date, college_category, latest_news, news_event, Introduction } = item;
                                    return (
                                        <>
                                            <div className='exm'><MedicalExams
                                                college_name={college_name}
                                                // CollegeImg={CollegeImg}
                                                college_logo={college_logo}
                                                // ExamName={ExamName}
                                                apply_link={apply_link}
                                                college_address={college_address}
                                                Last_date={Last_date}
                                                latest_news={latest_news}
                                                news_event={news_event}
                                                Introduction={Introduction}
                                                college_category={college_category}
                                            /></div>

                                        </>

                                    )
                                })

                        }

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MedicalCounselling