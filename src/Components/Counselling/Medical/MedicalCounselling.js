import React, { useState } from 'react';
import Menu from "../Engineering/ExamData";
import Exams from '../Engineering/Exams'
import Filtering from "../Engineering/Filtering";
import ResNavbar from '../../Navbar/ResNavbar';


function MedicalCounselling() {

    const [items, setItems] = useState(Menu);


    const sendingData = (categData) => {
        const updateData = Menu.filter((ele) => {
            return ele.category === categData;
        });
        setItems(updateData);
    }

    return (
        <div>
            <ResNavbar />
            <section className='exam-section'>
                <div className='filter-collegeExam'>

                    <div className='fil'><Filtering sendingData={sendingData} Menu={Menu} setItems={setItems} /></div>
                    <div className='multiple'>
                        {
                            items.map((item) => {
                                const {CollegeImg, CollegeName, ExamName, ExamLogo,
                                    ExamsLink, CollegeAddress, LastDate, category } = item;
                                return (
                                    <>
                                        <div className='exm'><Exams
                                            CollegeName={CollegeName}
                                            CollegeImg={CollegeImg}
                                            ExamLogo={ExamLogo}
                                            ExamName={ExamName}
                                            ExamsLink={ExamsLink}
                                            CollegeAddress={CollegeAddress}
                                            LastDate={LastDate}
                                            category={category}
                                        /></div>

                                    </>

                                )
                            })

                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default MedicalCounselling