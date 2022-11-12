import React from 'react'
import './Footer.css';
import {Link} from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div classNameName='footer'>
      <div className="pg-footer">
        <footer className="footer">
          <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link">
                  <span className="hidden-link-text">LOGO</span>
                  <h2>CareerBanao</h2>
                </a>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name">Contact info</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <CallIcon />
                    <a href="#">+91 9142609127</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <LocationOnIcon />
                    <a href="#">Ramleela Maidan, Khojwa, Durgakund (Varanasi), 221010 <br/>
                      India</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <EmailIcon />
                    <a href="mailto:careerbanao20@gmail.com">careerbanao20@gmail.com</a>
                  </li>
                   
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name">Experts From</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    DELHI NCR 
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    BANGALORE 
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                     PUNE 
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                     PUNJAB 
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                     UTTAR PRADESH 
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    BIHAR
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  JHARKHAND
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                     Privacy Notice 
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  Terms of Use 
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                     Support Center 
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    Service Status 
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                     Security 
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                     Blog 
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    Customers</li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                     Reviews 
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                <p className="footer-call-to-action-description"> Have a support question?</p>
                <Link to="/homeAPI" className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </Link>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> +91 9142609127 </a></p>
              </div>
            </div>
            <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
              <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
            </svg>
              <a className="footer-social-link linkedin" href="https://www.linkedin.com/company/careerbanao1/" target="_blank">
                <span className="hidden-link-text">Linkedin</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
              </a>
              <a className="footer-social-link twitter" href="https://www.instagram.com/careerbanao20/" target="_blank">
                 <InstagramIcon style={{color:"white"}}/>
              </a>
              <a className="footer-social-link youtube" href=" https://youtube.com/c/CareerBanao" target="_blank">
                <span className="hidden-link-text">Youtube</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                </svg>
              </a>
              <a className="footer-social-link github" href="https://www.facebook.com/careerbanao/" target="_blank">
                <FacebookIcon style={{color:"white"}}/>
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link"  target="_self"> ©2022. | Designed By:<a href="https://www.linkedin.com/in/surendrakumar143/" target="blank" style={{color:"white"}}>Surendra Kumar Patel</a>  & <a href="https://www.linkedin.com/in/pranav-tyagi-/" style={{color:"white"}} target ="blank" >Pranav Tyagi</a>. | All rights reserved. </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer