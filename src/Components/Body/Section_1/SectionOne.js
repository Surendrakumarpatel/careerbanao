import React from 'react'
import './SectionOne.css';
import Button from '@mui/material/Button';
 
function SectionOne() {

    return (
        <div className='sectionOne'>
            <div className='sec_1'>
                <div className='sec_1_text'>
                    <span><p>Happier People.</p></span>
                    <h1>Happier Workplaces.</h1>
                    <p>Are you an institution looking to create a happier community? <br /> We have helped colleges, corporates, incubators, government <br /> bodies in building emotionally resilient communities of more <br />than 2 million people.</p>
                    <div className='sec_1_btn'>
                        <Button variant="contained">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className='sec_1_logos'>
                     <div className='logo_1'>
                        <img src='https://yourdost-images.s3-ap-southeast-1.amazonaws.com/newHome/b2b-assets/iitmadras.png'></img>
                     </div>
                     <div className='logo_1 bc'><img src='https://yourdost-images.s3-ap-southeast-1.amazonaws.com/newHome/b2b-assets/srm.png'></img>
                     </div>
                     <div className='logo_1'><img src='https://yourdost-images.s3-ap-southeast-1.amazonaws.com/newHome/b2b-assets/iitkgp+logo.png'></img>
                     </div>
                </div>
            </div>
        </div>

    )
}

export default SectionOne