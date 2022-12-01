import React, { useEffect, useState } from 'react'
import './SectionFour.css';
// import { useNavigate } from 'react-router-dom';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import Whatsapp from "../../utils/whatsapp.png";
import VideoCalls from "../../utils/videocalls.png";
import FTF from "../../utils/facetoface.png";
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, TextField } from '@mui/material';
import Contact from "../../utils/contact.png";
import axios from 'axios';
import { useFormik } from 'formik';
import { VideoCallValidation } from '../../validation/schema/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BaseUrl} from "../../baseurl/baseurl";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// getting all input field data
const initialValues = {
  name: "",
  email: "",
  phone: "",
  type: "",
  comment: "null",
}
const URL = `${BaseUrl}/homeAPI`; // testing purpuse
// const URL = "https://kalkaprasad.com/careerbanao/index.php/APIBase/homeAPI";

function SectionFour() {
  const [whatsappLink, setWhatsappLink] = useState("");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios.get(`${BaseUrl}/getWhatsAppURL`).then((res, req) => {
      const wtlink = res.data[0].whatsApp_link;
      setWhatsappLink(wtlink);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  // this is for open popup
  const handleClickOpen = (type) => {
    setOpen(true);
    initialValues.type=type
  };
    // this is for close popup
  const handleClose = () => {
    setOpen(false);
  };

  // This is formik and Yup library for form validation  
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
      action.resetForm();
    }
  });
 
  return (
    <div className='video-calls'>
      <div className='center'>
        <a href={`${whatsappLink}`} className='whatsapp-chat'>
          <div className='inside-whatsapp-chat'>
            <img src={Whatsapp} alt="whatsapp" />
            <div>
              <p className='headings'>WhatsApp Chat</p>
              <p className='para'>Chat anonymously with an expert of your choice. This service is available to you anytime,anywhere.</p>
            </div>
          </div>
        </a>
        <div className='voice-calls' onClick={() => handleClickOpen("Video")}>
          {/* <VoiceChatIcon style={{fontSize:"2.5rem" , color:"green"}} /> */}
          <img src={VideoCalls} alt="whatsapp" />
          <div>
            <p className='headings'>Voice/Video Calls</p>
            <p className='para'>Speak to our experts or get on a call with them. Get personalized attention right when you need it.</p>
          </div>
        </div>
        <div className='ftf' onClick={() => handleClickOpen("face to face")}>
          {/* <WhatsAppIcon style={{fontSize:"2.5rem", color:"green"}} /> */}
          <img src={FTF} alt="whatsapp" />
          <div>
            <p className='headings'>Face to Face Sessions</p>
            <p className='para'>Connect 1-on-1 in-person with an expert of your choice.To have a positive or meaningful connection with us.</p>
          </div>
        </div>
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
                variant="standard"/>
                <p className='form-error'>{Formik.errors.email}</p>
              <Button type="submit" style={{ marginTop: "2rem", color: "white", background: "#49387f" }}>Submit</Button>
            </form>
          </DialogContentText>
        </DialogContent>

      </Dialog>
      <ToastContainer/>
    </div>
  )
}

export default SectionFour;