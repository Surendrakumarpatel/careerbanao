import React from 'react'
// import "./Exams.css";
import MedicalExamLink from './MedicalExamLink';
 

function MedicalExams({college_name,college_logo,apply_link,college_address,Last_date,college_category,latest_news,news_event, Introduction}) {
  return (
    <div className='exams'>
      <div className='college-img'>
        {/* <img src={CollegeImg}/> */}
      </div>
     <MedicalExamLink
     college_logo={college_logo}
     college_name={college_name}
     apply_link = {apply_link}
     college_address ={college_address}
     Last_date = {Last_date}
     college_category = {college_category}
     latest_news = {latest_news}
     news_event = {news_event}
     Introduction = {Introduction}
     />
    </div>
 )
}

export default MedicalExams;