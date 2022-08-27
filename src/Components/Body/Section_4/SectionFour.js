import React from 'react'
import './SectionFour.css';
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SectionFour() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className='video-calls'>
      <div className='center'>
        <div className='whatsapp-chat'>
          <img src={Whatsapp} />
          <div>
            <p className='headings'>WhatsApp Chat</p>
            <p className='para'>Chat anonymously with an expert of your choice. This service is available to you anytime,anywhere.</p>
          </div>
        </div>
        <div className='voice-calls' onClick={handleClickOpen}>
          {/* <VoiceChatIcon style={{fontSize:"2.5rem" , color:"green"}} /> */}
          <img src={VideoCalls} />
          <div>
            <p className='headings'>Voice/Video Calls</p>
            <p className='para'>Speak to our experts or get on a call with them. Get personalized attention right when you need it.</p>
          </div>
        </div>
        <div className='ftf' onClick={handleClickOpen}>
          {/* <WhatsAppIcon style={{fontSize:"2.5rem", color:"green"}} /> */}
          <img src={FTF} />
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
        <DialogTitle style={{textAlign:"center",fontFamily:"Poppins",fontWeight:"600"}}>{"User's Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText className="contact-us-img" id="alert-dialog-slide-description">
            <div className='cu-img'>
              <img src = {Contact}></img>
            </div>
            <form className='user-information'>
              <TextField style={{marginTop:"0.5rem"}} required type="text" id="standard-basic" label="Name" variant="standard" />
              <TextField style={{marginTop:"0.5rem"}} required minlength="10" maxlength="10" type="tel" id="standard-basic" label="Phone" variant="standard" />
              <TextField style={{marginTop:"0.5rem"}} required type="email" id="standard-basic" label="Email" variant="standard" />
              <Button style={{marginTop:"1rem",color:"white", background:"#49387f"}} onClick={handleClose}>Submit</Button>
            </form>
          </DialogContentText>
        </DialogContent>
         
      </Dialog>
    </div>
  )
}

export default SectionFour