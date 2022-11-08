import React, { useState,useEffect } from 'react';
import axios from "axios";
import Filtering from "../Engineering/Filtering";
import ResNavbar from '../../Navbar/ResNavbar';
import MedicalExams from './MedicalExams';
import Footer from '../../Body/Section_6/Footer';
import {BaseUrl} from "../../baseurl/baseurl";


function MedicalCounselling() {
  const [medicalData, setMedicalData] = useState([]);

  const gettingCategory =  (categData) =>{
     getApiData(categData);
  }

  const getApiData = async (categData) => {
     await axios.get(`${BaseUrl}/getApplicationDetailsMed?category=${categData}`).then((res, req)=>{
        setMedicalData(res.data);
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
                    <div className='fil'><Filtering gettingCategory ={gettingCategory} medicalData={medicalData} setMedicalData={setMedicalData} /></div>
                    <div className='multiple'>
                        {
                            medicalData.map((item) => {
                                const {college_name, college_logo, apply_link, college_address, Last_date, college_category,latest_news,news_event,Introduction } = item;
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
                                            latest_news = {latest_news}
                                            news_event = {news_event}
                                            Introduction = {Introduction}
                                            college_category={college_category}
                                        /></div>

                                    </>

                                )
                            })

                        }

                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default MedicalCounselling