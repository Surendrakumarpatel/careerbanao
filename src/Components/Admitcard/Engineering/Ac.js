import React from 'react' 
import AcLink from './AcLink'
 

function Results({CollegeImg,ExamLogo,ExamName,ExamsLink,CollegeAddress,category}) {
    return (
        <div className='exams'>
            <div className='college-img'>
                <img src={CollegeImg} />
            </div>
            <AcLink
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