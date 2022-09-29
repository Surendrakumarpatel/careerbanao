import React from 'react'
import MedicalAcLink from './MedicalAcLink'
 
function MedicalAc({CollegeImg,ExamLogo,ExamName,ExamsLink,CollegeAddress,category}) {
    return (
        <div className='exams'>
            <div className='college-img'>
                {/* <img src={CollegeImg} /> */}
            </div>
            <MedicalAcLink
                ExamLogo={ExamLogo}
                ExamName={ExamName}
                ExamsLink={ExamsLink}
                CollegeAddress={CollegeAddress}
                category={category}
            />
        </div>

    )
}

export default MedicalAc