import React from 'react'
import "./Exams.css";
// import EastIcon from '@mui/icons-material/East';
import ExamLink from './ExamLink';

function Exams({CollegeImg,ExamLogo,ExamName,ExamsLink,CollegeAddress,LastDate,category}) {
  return (

    <div className='exams'>
      <div className='college-img'>
        <img src={CollegeImg}/>
      </div>
     <ExamLink 
     ExamLogo={ExamLogo}
     ExamName={ExamName}
     ExamsLink = {ExamsLink}
     CollegeAddress ={CollegeAddress}
     LastDate = {LastDate}
     category = {category}
     />
    </div>



  )
}

export default Exams