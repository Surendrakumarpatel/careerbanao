import React from 'react'
import "./Header.css";
import Button from '@mui/material/Button'
import CounselingImage from '../utils/cimg.svg'

function Header() {
  return (
    <div className='header'>
      <div className='about-company'>
        <h1>Get Help. Get Better Admission.</h1>
        <span>No matter what's troubling you, get the support you need,<br/> right here, right now.</span>
        <div className='btn'>
          <Button variant="contained" color="success">
            Chat Now
          </Button>
        </div>
      </div>
      <div className='counseling-img'>
        <img src ={CounselingImage}/> 
      </div>
    </div>
  )
}

export default Header