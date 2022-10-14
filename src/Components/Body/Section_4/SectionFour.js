import React, { useEffect, useState } from 'react'
import './SectionFour.css';
// import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import Whatsapp from "../../utils/whatsapp.png";
import VideoCalls from "../../utils/videocalls.png";
import FTF from "../../utils/facetoface.png";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, TextField } from '@mui/material';
import Contact from "../../utils/contact.png";
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SectionFour() {
  // const URL = "https://kalkaprasad.com/careerbanao/index.php/APIBase/homeAPI";
  const URL = "https://kalkaprasad.com/careerbanao/index.php/APIBase/homeAPI"; // testing purpuse
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    comment: "null",

  });
  const changeEventHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const [whatsappLink, setWhatsappLink] = useState("");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/getWhatsAppURL").then((res, req) => {
      const wtlink = res.data[0].whatsApp_link;
      setWhatsappLink(wtlink);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const handleClickOpen = (type) => {
    setOpen(true);
    setUserInfo({
      type:type,
    })
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitData = async (e) => {
    e.preventDefault();
    await axios.post(URL, JSON.stringify(userInfo)).then((res) => {
      console.log(userInfo);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      type: "video",
      comment: "null"
    })
    handleClose();
  }

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
        <div className='voice-calls' onClick={()=>handleClickOpen("Video") }>
          {/* <VoiceChatIcon style={{fontSize:"2.5rem" , color:"green"}} /> */}
          <img src={VideoCalls} alt="whatsapp" />
          <div>
            <p className='headings'>Voice/Video Calls</p>
            <p className='para'>Speak to our experts or get on a call with them. Get personalized attention right when you need it.</p>
          </div>
        </div>
        <div className='ftf' onClick={()=>handleClickOpen("face to face") }>
          {/* <WhatsAppIcon style={{fontSize:"2.5rem", color:"green"}} /> */}
          <img src={FTF} alt="whatsapp" />
          <div>
            <p className='headings'>Face to Face Sessions</p>
            <p className='para'>Connect 1-on-1 in-person with an expert of your choice.</p>
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
            <form onSubmit={submitData} className='user-information' >
              <TextField onChange={changeEventHandler} value={userInfo.name} name="name" style={{ marginTop: "0.5rem" }} required type="text" id="standard-basic" label="Name" variant="standard" />
              <TextField onChange={changeEventHandler} value={userInfo.phone} name="phone" style={{ marginTop: "0.5rem" }} required type="tel" minlength="10" maxlength="10" id="standard-basic" label="Phone" variant="standard" />
              <TextField onChange={changeEventHandler} value={userInfo.email} name="email" style={{ marginTop: "0.5rem" }} required type="email" id="standard-basic" label="Email" variant="standard" />
              <Button type="submit" style={{ marginTop: "2rem", color: "white", background: "#49387f" }}>Submit</Button>
            </form>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default SectionFour;