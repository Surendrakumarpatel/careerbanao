import React from 'react'
import ResNavbar from '../../Navbar/ResNavbar';
import "./ApplyHome.css";
import ApplyHomeSlider from './ApplyHomeSlider';
 
function ApplyHome() {
    return (
        <div>
            <ResNavbar />
            <ApplyHomeSlider/>
            <div className="applyhome">
                <div className="letestnews">
                    <div className='news-text-1'><h1>Letest News</h1></div>
                    <div className='news-text-2 marquee'><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, expedita?<p className='ltn'>New</p></span></div>
                </div>
            </div>
        </div>
    )
}

export default ApplyHome