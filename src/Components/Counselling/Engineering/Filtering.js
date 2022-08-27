import React, { useState } from 'react'
import "./Filtering.css";
 
function Filtering({ sendingData, setItems, Menu }) {

  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  
  const setButtonColor1 = () =>{
    setColor1(true);
    setColor2(false);
  }

  const setButtonColor2 = () =>{
    setColor2(true);
    setColor1(false);
  }
  return (
    <div className='filtering'>
      <div className='found-exams'>
        <div>Found All Exams</div>
        <div className='default-text' onClick={() => {setItems(Menu);setColor1(false);setColor2(false)}}>Default</div>
      </div>
      <div className='private-government'>
        <button className={color1 ? "colorChanged" : "gov"} style={{ position: "relative", top: "-5px" }} onClick={()=> {sendingData("government");setButtonColor1() }} ><span className='college-type'>Government</span></button>
        <button className={color2 ? "colorChanged" : "priv"} style={{ position: "relative", top: "-5px"}} onClick={()=> {sendingData("private");setButtonColor2()}} ><span className='college-type'>Private</span></button>
      </div>

    </div>
  )
}

export default Filtering