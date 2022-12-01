import React from 'react'
import './SectionThree.css';

function SectionThree() {
 
  return (
    <div className='section-three'>
      <div className='steps-to-reach-cb-text'>
        <p>CareerBanao can assist you in 3 stages.</p>
      </div>
      <div className='steps-to-reach-cb-cards'>
        <div className='stage-cards'>
          <div style={{ display: "flex", flexDirection: "column", width: "80%" }}><div style={{ display: "flex", alignItems: "center" }}><span style={{ fontSize: "4rem", color: "gray" }}>1 </span><h2 style={{ fontSize: "18px", marginLeft: "1rem" }}>Connect with our counsling expert</h2></div>
            <p style={{ fontSize: "13px" }}>Chat anonymously with a YourDOST expert who's here to help you and not judge you.</p>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <img alt="img" src='https://d2a61ob4m0n1zq.cloudfront.net/newHome/1.svg' />
          </div>
        </div>
        <div className='stage-cards stage-cards-reverse'>
          <div className='stage-cards-img-2'>
            <img alt="img" src='https://d2a61ob4m0n1zq.cloudfront.net/newHome/2.svg' />
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "80%" }}><div style={{ display: "flex", alignItems: "center" }}><span style={{ fontSize: "4rem", color: "gray" }}>2 </span><h2 style={{ fontSize: "18px", marginLeft: "1rem" }}>Ask your Queries?</h2></div>
            <p style={{ fontSize: "13px" }}>Chat anonymously with a YourDOST expert who's here to help you and not judge you.</p>
          </div>
        </div>
        <div className='stage-cards'>
          <div style={{ display: "flex", flexDirection: "column", width: "80%" }}><div style={{ display: "flex", alignItems: "center" }}><span style={{ fontSize: "4rem", color: "gray" }}>3 </span><h2 style={{ fontSize: "18px", marginLeft: "1rem" }}>Become better version  of yourself.</h2></div>
            <p style={{ fontSize: "13px" }}>Chat anonymously with a YourDOST expert who's here to help you and not judge you.</p>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <img alt="img" src='	https://d2a61ob4m0n1zq.cloudfront.net/newHome/3.svg' />
          </div>
        </div>
      </div>
    </div >
  )
}

export default SectionThree
