import React, { useState } from 'react'
import Footer from '../../Body/Section_6/Footer'
import Exams from './Exams'
import Filtering from './Filtering'
import "./EngineeringCounselling.css";
import Menu from "./ExamData";
import ResNavbar from '../../Navbar/ResNavbar'

function EngineeringCounselling() {
  const [items, setItems] = useState(Menu);


  const sendingData = (categData) => {
  
    const updateData = Menu.filter((ele) => {
      return ele.category === categData;
    });
    setItems(updateData);
     
  }
 
  return (
    <div className='engineering-c'>
      <ResNavbar />
      <div className='exam-section'>
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
      </div>
    <Footer />
    </div>
  )
}

export default EngineeringCounselling