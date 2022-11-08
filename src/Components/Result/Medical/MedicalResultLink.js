import React from 'react'
 
function MedicalResultLink({ExamLogo,ExamName,ExamsLink,CollegeAddress}) {
  return (
    <div className='exam-link'> 
        <div className='link-and-text'>
          <div className='link'>
            <img src={ExamLogo} alt="img"/>
            <div className='exams-name'>
              <p>{ExamName}</p>
              <span>{CollegeAddress}</span>
            </div>
          </div>
          <div className='apply'>
             <a style={{color:"black"}} href={ExamsLink} target="blank"><button>Result</button></a>
          </div>
        </div>
         
    </div>
  )
}

export default MedicalResultLink