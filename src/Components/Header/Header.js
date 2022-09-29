import React, { useState, useEffect } from 'react'
import "./Header.css";
import Button from '@mui/material/Button'
import CounselingImage from '../utils/cimg.svg'
import axios from 'axios';

function Header() {
  const [whatsappLink, setWhatsappLink] = useState("");


  useEffect(() => {
    axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/getWhatsAppURL").then((res, req) => {
      const wtlink = res.data[0].whatsApp_link;
      console.log(wtlink);
      setWhatsappLink(wtlink);
    }).catch((err) => {
      console.log(err);
    })
  }, []);



  return (
    <div className='header'>
      <div className='about-company'>
        <h1>Get Help. Get Better Admission.</h1>
        <span>No matter what's troubling you, get the support you need,<br /> right here, right now.</span>
        <div className='btn'>
          <a href={`${whatsappLink}`}><Button variant="contained">Chat Now</Button></a>
        </div>
      </div>
      <div className='counseling-img'>
        <img src={CounselingImage} />
      </div>
    </div>
  )
}

export default Header