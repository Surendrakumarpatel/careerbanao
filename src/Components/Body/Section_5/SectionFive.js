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
import { useFormik } from 'formik';
import { VideoCallValidation } from '../../validation/schema/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseUrl } from '../../baseurl/baseurl';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const URL = `${BaseUrl}/homeAPI`;

// getting all input field data
const initialValues = {
  name: "",
  email: "",
  phone: "",
  type: "Refer a Friend",
  comment: "null",
}

function SectionFive() {
  const [testimonialData, setTestimonialData] = useState([]);
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  // Form validation formik and Yup
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: VideoCallValidation,
    onSubmit: async (values, action) => {
      setOpen(false);
      await axios.post(URL, JSON.stringify(values)).then((res) => {
        toast.success('Submitted Successfully!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
            console.log(res.data);
          }).catch((err) => {
            console.log(err);
          })
      console.log(values);
      action.resetForm();
      handleClose();
    }
  });

  useEffect(() => {
    axios.get(`${BaseUrl}/fetchtestimonialsAPI`).then((res, req) => {
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
        testimonialData === 204 ? <p className = "data-not-found">Data Not Found!</p> :
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
        <DialogTitle style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: "600" }}>{"Refer Friend"}</DialogTitle>
        <DialogContent>
          <DialogContentText className="contact-us-img" id="alert-dialog-slide-description">
            <div className='cu-img'>
              <img src={Contact} alt="whatsapp"></img>
            </div>
            <form onSubmit={Formik.handleSubmit} className='user-information' >
            <TextField
                type="text"
                name="name"
                value={Formik.values.name}
                onChange={Formik.handleChange}
                id="standard-basic"
                label="Name"
                variant="standard" 
                style={{ marginTop: "0.5rem" }}
                />
                <p className='form-error'>{Formik.errors.name}</p>
              <TextField
                type="number"
                name="phone"
                value={Formik.values.phone}
                onChange={Formik.handleChange}
                style={{ marginTop: "0.5rem" }}
                placeholder="Phone No"
                id="standard-basic"
                label="Phone"
                variant="standard" />
                <p className='form-error'>{Formik.errors.phone}</p>
              <TextField
                type="email"
                name="email"
                value={Formik.values.email}
                onChange={Formik.handleChange}
                style={{ marginTop: "0.5rem" }}
                id="standard-basic"
                label="Email"
                variant="standard" />
                <p className='form-error'>{Formik.errors.email}</p>
                <Button  type="submit" style={{ marginTop: "2rem", color: "white", background: "#49387f" }}>Submit</Button>
            </form>
          </DialogContentText>
        </DialogContent>

      </Dialog>
      <ToastContainer/>
    </div>
  )
}

export default SectionFive