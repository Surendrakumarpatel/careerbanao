import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./ApplyHomeSlider.css";
import Img_1 from "../../utils/apply-1.svg";

function ApplyHomeSlider() {

    const [banner, setBanner] = useState("https://unsplash.com/blog/content/images/size/w600/2022/06/A_look_back_at_May_-Blog--1.jpeg")
    useEffect(()=>{
       axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/getBanner",).then((res)=>{
         setBanner(res.data);
       })
    },[]);

    return (
        <div className='apply-home-slider'>
            
               <img src={banner[0].banner_link} />
            
        </div>
    )
}

export default ApplyHomeSlider