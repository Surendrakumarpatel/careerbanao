import React from 'react'
// import ExamLink from '../../Counselling/Engineering/ExamLink'
import ResultLink from './ResultLink'

function Results({ExamLogo,ExamName, web_link,CollegeAddress,category}) {
    return (
        <div className='exams'>
            <div className='college-img'>
                {/* <img src={CollegeImg} /> */}
            </div>
            <ResultLink
                ExamLogo={ExamLogo}
                ExamName={ExamName}
                web_link={web_link}
                CollegeAddress={CollegeAddress}
                category={category}
            />
        </div>

    )
}

export default Results