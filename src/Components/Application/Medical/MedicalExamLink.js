import React from 'react'
import { useNavigate } from "react-router-dom";
// import "./ExamLink.css";

function MedicalExamLink({ college_logo, college_name, apply_link, college_address, Last_date, latest_news, news_event, Introduction }) {
  const navigate = useNavigate();
  const switchToApplyHomePage = () => {
    navigate("/mapplicationapply", { state: { id: 1, intro: Introduction, latest_news: latest_news, news_event: news_event, apply_link: apply_link } });
  }
  
  return (
    <div className='exam-link'>
      <div className='link-and-text'>
        <div>
          <div className='link'>
            <img src={college_logo} />
            <div className='exams-name'>
              <p>{college_name}</p>
              <span>{college_address}</span>
            </div>
          </div>
          <div className="last-date">
            <span>Last Date: {Last_date}</span>
          </div>
        </div>
        <div className='apply'>
          <button onClick={switchToApplyHomePage}><a style={{ color: "black" }}>Apply Now</a></button>
        </div>
      </div>

    </div>
  )
}

export default MedicalExamLink