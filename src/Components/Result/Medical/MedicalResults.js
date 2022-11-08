import React from 'react'
import MedicalResultLink from './MedicalResultLink'
 

function MedicalResults({ExamLogo,ExamName,ExamsLink,CollegeAddress,category}) {
    return (
        <div className='exams'>
            <div className='college-img'>
                {/* <img src={CollegeImg} alt="img" /> */}
            </div>
            <MedicalResultLink
                ExamLogo={ExamLogo}
                ExamName={ExamName}
                ExamsLink={ExamsLink}
                CollegeAddress={CollegeAddress}
                category={category}
            />
        </div>

    )
}

export default MedicalResults