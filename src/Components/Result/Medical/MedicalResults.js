import React from 'react'
import MedicalResultLink from './MedicalResultLink'
// import ExamLink from '../../Counselling/Engineering/ExamLink'
import ResultLink from './MedicalResultLink'

function MedicalResults({ExamLogo,ExamName,ExamsLink,CollegeAddress,category}) {
    return (
        <div className='exams'>
            <div className='college-img'>
                {/* <img src={CollegeImg} /> */}
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