import React from 'react';
import './Description.css';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ComputerIcon from '@mui/icons-material/Computer';

function Description() {
    return (
        <div className="description">
            <div className='des_icons'>
                <div className='support'>
                    <LocalPoliceIcon className="dis-icon dis-icon1"/>
                    <div className="support-txt">Safe and Secure</div>
                </div>
                <div className='support'>
                    <SupportAgentIcon className="dis-icon dis-icon2"/>
                    <div className="support-txt">24X7 Counselling Support</div>
                </div>
                <div className='support'>
                    <ComputerIcon className="dis-icon dis-icon3"/>
                    <div className="support-txt">Conducted 1Lakh+ Sessions</div>
                </div>
            </div>
        </div>
    )
}

export default Description