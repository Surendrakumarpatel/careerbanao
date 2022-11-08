import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./ApplyHomeSlider.css";
import { BaseUrl } from '../../baseurl/baseurl';
 
function ApplyHomeSlider() {
    const [banner, setBanner] = useState("https://unsplash.com/blog/content/images/size/w600/2022/06/A_look_back_at_May_-Blog--1.jpeg")
    useEffect(() => {
        axios.get(`${BaseUrl}/getBannerAPI`,).then((res) => {
            console.log(banner);
            setBanner(res.data);
        })
    }, []);

    return (
        <div className='apply-home-slider'>
            <div className='carousel-img'>
                {
                    banner.length === 0 ? "Image Not Available" : <img className="slider-img" src={banner[0].banner_url} />
                }

            </div>
        </div>
    )
}

export default ApplyHomeSlider