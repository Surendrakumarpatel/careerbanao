import React from 'react'
 
function ResultLink({ExamLogo,ExamName,web_link,CollegeAddress}) {
  return (
    <div className='exam-link'> 
        <div className='link-and-text'>
          <div className='link'>
            <img src={ExamLogo} />
            <div className='exams-name'>
              <p>{ExamName}</p>
              <span>{CollegeAddress}</span>
            </div>
          </div>
          <div className='apply'>
             <a href = {web_link} style={{color:"black"}} target="blank"><button>Result</button></a>
          </div>
        </div>
    </div>
  )
}

export default ResultLink