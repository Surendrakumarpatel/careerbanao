import React from 'react'
import "./ExamLink.css";

function ExamLink({ ExamLogo, ExamName, ExamsLink, CollegeAddress, LastDate, category }) {
  return (
    <div className='exam-link'>
      <div className='link-and-text'>
        <div>
          <div className='link'>
            <img src={ExamLogo} />
            <div className='exams-name'>
              <p>{ExamName}</p>
              <span>{CollegeAddress}</span>
            </div>

          </div>
          <div className="last-date">
            <span>Last Date: {LastDate}</span>
          </div>
        </div>
     <div className='apply'>
          <button><a style={{ color: "black" }} href={ExamsLink}>Apply Now</a></button>

        </div>
      </div>

    </div>
  )
}

export default ExamLink