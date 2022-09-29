import React,{useState, useEffect} from 'react';
import axios from "axios";
import Footer from '../../Body/Section_6/Footer';
import Filtering from '../../Application/Engineering/Filtering';
import ResNavbar from '../../Navbar/ResNavbar';
import Ac from './Ac';

function EngineeringAdmitCard() {
  
  const [eAdmitCard, setEAdmitCard] = useState([]);

 const gettingCategory =  (categData) =>{
    getApiData(categData);
 }

 const getApiData = async (categData) => {
    await axios.get(`https://kalkaprasad.com/careerbanao/index.php/APIBase/getAdmitEng?category=${categData}`).then((res, req)=>{
      setEAdmitCard(res.data);
   });
 }
 useEffect(() => {
   getApiData("");
 }, []);

 


  return (
    <div className='engineering-c'>
      <ResNavbar />
      <div className='exam-section'>
        <div className='filter-collegeExam'>

          <div className='fil'><Filtering gettingCategory ={gettingCategory} eAdmitCard={eAdmitCard} setEAdmitCard={setEAdmitCard} /></div>
          <div className='multiple'>
            {
              eAdmitCard.map((item) => {
                const {college_name, college_logo, college_address,web_link} = item;
                return (
                  <>
                    <div className='exm'><Ac
                      // CollegeName={college_name}
                      // CollegeImg={CollegeImg}
                      ExamLogo={college_logo}
                      ExamName={college_name}
                      ExamsLink={web_link}
                      CollegeAddress={college_address}
                      // category={category}
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

export default EngineeringAdmitCard;