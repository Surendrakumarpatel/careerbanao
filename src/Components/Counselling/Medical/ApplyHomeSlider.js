import React,{useEffect, useState} from 'react';
import axios from "axios";
import "./ApplyHomeSlider.css";
// import Img_1 from "../../utils/apply-1.svg";
 
function ApplyHomeSlider() {
    const [banner, setBanner] = useState("loading...")
    useEffect(()=>{
       axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/getBanner",).then((res)=>{
         setBanner(res.data);
       })
    },[]);

    return (
        <div className='apply-home-slider'>
            <div className='carousel-img'>
                <img className="slider-img" src = {banner[0].banner_link} />
            </div>
        </div>
    )
}

export default ApplyHomeSlider