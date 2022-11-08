import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./ApplyHomeSlider.css";
import { BaseUrl } from '../../baseurl/baseurl';
// import Img_1 from "../../utils/apply-1.svg";

function ApplyHomeSlider() {
    const [banner, setBanner] = useState("loading...")
    useEffect(() => {
        axios.get(`${BaseUrl}/getBannerAPI`,).then((res) => {
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