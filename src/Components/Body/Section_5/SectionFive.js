import React from 'react'
import "./SectionFive.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function SectionFive() {

  return (
    <div className='section-five'>
      <div className='testimonials'>
        <h1>What do students say?</h1>
      </div>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img className="t-img" src="https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <div className="myCarousel">
            <h3>Prateek Raghav</h3>
            <h4>LPU</h4>
            <p>
              During B.Tech, I found it difficult to cope up with studies and hence, fell into a spiral of negative thinking and despair. Several backlogs in B.Tech had left me very worried and my life was miserable. When I got to know about YourDOST, I signed up on the website. Earlier, I was a bit hesitant in opening up but they made me comfortable. The counsellors helped me find the root cause of my issues, suggested techniques to overcome stress and negative thinking.</p>
          </div>
        </div>

        <div>
          <img className="t-img" src="https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <div className="myCarousel">
            <h3>Yha Name Ayega</h3>
            <h4>Yha College Name Ayega</h4>
            <p>
              During B.Tech, I found it difficult to cope up with studies and hence, fell into a spiral of negative thinking and despair. Several backlogs in B.Tech had left me very worried and my life was miserable. When I got to know about YourDOST, I signed up on the website. Earlier, I was a bit hesitant in opening up but they made me comfortable. The counsellors helped me find the root cause of my issues, suggested techniques to overcome stress and negative thinking.
            </p>
          </div>
        </div>

        <div>
          <img className="t-img" src="https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <div className="myCarousel">
            <h3>Yha Name Ayega</h3>
            <h4>Yha College Name Ayega</h4>
            <p>
              During B.Tech, I found it difficult to cope up with studies and hence, fell into a spiral of negative thinking and despair. Several backlogs in B.Tech had left me very worried and my life was miserable. When I got to know about YourDOST, I signed up on the website. Earlier, I was a bit hesitant in opening up but they made me comfortable. The counsellors helped me find the root cause of my issues, suggested techniques to overcome stress and negative thinking.
            </p>
          </div>
        </div>

        <div>
          <img className="t-img" src="https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <div className="myCarousel">
            <h3>Yha Name Ayega</h3>
            <h4>Yha College Name Ayega</h4>
            <p>
              During B.Tech, I found it difficult to cope up with studies and hence, fell into a spiral of negative thinking and despair. Several backlogs in B.Tech had left me very worried and my life was miserable. When I got to know about YourDOST, I signed up on the website. Earlier, I was a bit hesitant in opening up but they made me comfortable. The counsellors helped me find the root cause of my issues, suggested techniques to overcome stress and negative thinking.
            </p>
          </div>
        </div>

        <div>
          <img className="t-img" src="https://images.unsplash.com/photo-1527707471127-c3ad5ea438d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <div className="myCarousel">
            <h3>Yha Name Ayega</h3>
            <h4>Yha College Name Ayega</h4>
            <p>
              During B.Tech, I found it difficult to cope up with studies and hence, fell into a spiral of negative thinking and despair. Several backlogs in B.Tech had left me very worried and my life was miserable. When I got to know about YourDOST, I signed up on the website. Earlier, I was a bit hesitant in opening up but they made me comfortable. The counsellors helped me find the root cause of my issues, suggested techniques to overcome stress and negative thinking.
            </p>
          </div>
        </div>


      </Carousel>
      <div style={{ textAlign: "center", marginTop: "5rem", marginLeft: "2rem" }}>
        <span className="refer" id="opensavior">REFER A FRIEND</span>
      </div>
    </div>
  )
}

export default SectionFive