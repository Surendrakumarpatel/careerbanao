import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ExamLink.css";

function ExamLink({ id, ExamLogo, ExamName, apply_link, CollegeAddress, Last_date, latest_news, news_event, Intro }) {
  const navigate = useNavigate();

  const switchToApplyHomePage = () => {
    navigate("/applicationapply", { state: { id: 1, intro: Intro, latest_news: latest_news, news_event: news_event, apply_link: apply_link } });
  }

  return (
    <div className='exam-link'>
      <div className='link-and-text'>
        <div>
          <div className='link'>
            <img src={ExamLogo} />
            <div className='exams-name'>
              <p>Data Not Found!</p>
              <span>{CollegeAddress}</span>
            </div>
          </div>
          <div className="last-date">
            <span>Last Date: {Last_date}</span>
          </div>
        </div>
        <div className='apply'>
          <button onClick={switchToApplyHomePage}>Apply Now</button>
        </div>
      </div> 

    </div>
  )
}

export default ExamLink