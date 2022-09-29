import React, { useState, useEffect } from 'react'
import "./SectionFive.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, TextField } from '@mui/material';
import Contact from "../../utils/contact.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const URL = "http://localhost:3005/videocalls";
function SectionFive() {
  const [testimonialData, setTestimonialData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const changeEventHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitData = async (e) => {
    e.preventDefault();
    await axios.post(URL, userInfo).then((res) => {
      alert(res.data);
    }).catch((err) => {
      console.log(err);
    })
    setUserInfo({
      name: "",
      email: "",
      phone: "",
       
    })

  }
  
  useEffect(() => {
    axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/fetchtestimonialsAPI").then((res, req) => {
      setTestimonialData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

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
        {
          testimonialData.map((items) => {
            const { name, college_name, feedback, student_image } = items;
            return (
              <div>
                <img className="t-img" src={student_image} />
                <div className="myCarousel">
                  <h3>{name}</h3>
                  <h4>{college_name}</h4>
                  <p>{feedback}</p>
                </div>
              </div>
            )
          })
        }
      </Carousel>

      <div className='referFriends'>
        <span onClick={handleClickOpen} className="refer" id="opensavior">REFER A FRIEND</span>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: "600" }}>{"User's Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText className="contact-us-img" id="alert-dialog-slide-description">
            <div className='cu-img'>
              <img src={Contact} alt="whatsapp"></img>
            </div>
            <form onSubmit={submitData} className='user-information' >
              <TextField onChange={changeEventHandler} value={userInfo.name} name="name" style={{ marginTop: "0.5rem" }} required type="text" id="standard-basic" label="Name" variant="standard" />
              <TextField onChange={changeEventHandler} value={userInfo.phone} name="phone" style={{ marginTop: "0.5rem" }} required minlength="10" maxlength="10" type="tel" id="standard-basic" label="Phone" variant="standard" />
              <TextField onChange={changeEventHandler} value={userInfo.email} name="email" style={{ marginTop: "0.5rem" }} required type="email" id="standard-basic" label="Email" variant="standard" />
              <Button onClick={handleClose} type="submit" style={{ marginTop: "2rem", color: "white", background: "#49387f" }}>Submit</Button>
            </form>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default SectionFive