import React from 'react'
 
function AcLink({ExamLogo,ExamName,ExamsLink,CollegeAddress}) {
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
             <button><a style={{color:"black"}} href={ExamsLink}>Admit card</a></button>
          </div>
        </div>
         
    </div>
  )
}

export default AcLink