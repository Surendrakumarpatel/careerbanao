import React from 'react'
import "./ApplyHomeSlider.css";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function ApplyHomeSlider() {
    return (
        <div className='apply-home-slider'>
            <Carousel>
                <div>
                    <img src="https://media.istockphoto.com/photos/empty-classroom-picture-id1340516763?b=1&k=20&m=1340516763&s=170667a&w=0&h=zA05D-poPoIdoa06_vL2VLDOdBpPzMUKxUphHhx22jc=" />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
        </div>
    )
}

export default ApplyHomeSlider