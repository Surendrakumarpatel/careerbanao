import React from 'react'
import "./Contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ResNavbar from '../Navbar/ResNavbar';

function Contact() {
    return (
        <>
            <ResNavbar />
            <div className="container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <LocationOnIcon className="fas fa-map-marker-alt" />
                            <div className="topic">Address</div>
                            <div className="text-one">Surkhet, NP12</div>
                            <div className="text-two">Birendranagar 06</div>
                        </div>
                        <div className="phone details">
                            <CallIcon className="fas fa-phone-alt" />
                            <div className="topic">Phone</div>
                            <div className="text-one">+0098 9893 5647</div>
                            <div className="text-two">+0096 3434 5678</div>
                        </div>
                        <div className="email details">
                            <MailIcon className="fas fa-envelope" />
                            <div className="topic">Email</div>
                            <div className="text-one">careerbanao@gmail.com</div>
                            <div className="text-two">info.careerbanao@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p> */}
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input-box">
                                <input type="phone" placeholder="Phone No" />
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder='Message...' />
                            </div>
                            <div className="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact;