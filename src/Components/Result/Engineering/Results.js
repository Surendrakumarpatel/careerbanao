import React from 'react'
import ExamLink from '../../Counselling/Engineering/ExamLink'
import ResultLink from './ResultLink'

function Results({CollegeImg,ExamLogo,ExamName,ExamsLink,CollegeAddress,category}) {
    return (
        <div className='exams'>
            <div className='college-img'>
                <img src={CollegeImg} />
            </div>
            <ResultLink
                ExamLogo={ExamLogo}
                ExamName={ExamName}
                ExamsLink={ExamsLink}
                CollegeAddress={CollegeAddress}
                category={category}
            />
        </div>

    )
}

export default Results