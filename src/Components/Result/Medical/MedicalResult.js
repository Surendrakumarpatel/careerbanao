import React,{useState} from 'react'
import Menu from '../../Counselling/Engineering/ExamData';
// import Exams from '../../Counselling/Engineering/Exams';
import Filtering from '../../Counselling/Engineering/Filtering';
import ResNavbar from '../../Navbar/ResNavbar';
import Results from './MedicalResults';

function MedicalResult() {

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
                  ExamsLink, CollegeAddress, category } = item;
                return (
                  <>
                    <div className='exm'><Results
                      CollegeName={CollegeName}
                      CollegeImg={CollegeImg}
                      ExamLogo={ExamLogo}
                      ExamName={ExamName}
                      ExamsLink={ExamsLink}
                      CollegeAddress={CollegeAddress}
                      
                      category={category}
                    /></div>

                  </>

                )
              })

            }

          </div>
        </div>
      </div>



      {/* <Footer /> */}
    </div>
    
  )
}

export default MedicalResult