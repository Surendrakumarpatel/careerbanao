import React from 'react'
import "./Exams.css";
// import EastIcon from '@mui/icons-material/East';
import ExamLink from './ExamLink';

function Exams({ id, college_name, college_logo, apply_link, college_address, Last_date, college_category, latest_news, news_event, Intro }) {

  return (

    <div className='exams'>
      <div className='college-img'>
        {/* <img src={CollegeImg}/> */}
      </div>
      <ExamLink
        id={id}
        ExamLogo={college_logo}
        ExamName={college_name}
        apply_link={apply_link}
        CollegeAddress={college_address}
        Last_date={Last_date}
        category={college_category}
        latest_news={latest_news}
        news_event={news_event}
        Intro={Intro}
      />
    </div>



  )
}

export default Exams