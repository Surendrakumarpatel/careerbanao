import React, { useState } from 'react'
import "./Contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ResNavbar from '../Navbar/ResNavbar';
import axios from "axios";
import Footer from '../Body/Section_6/Footer';


function Contact() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        comment: "",
        type:"contact"

    })

    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/homeAPI";
    const submit = async (e) => {
        e.preventDefault();
        await axios.post(url, user).then((res)=>{ 
            console.log(user);
            console.log(res.data);
        }).catch((err)=>{
           console.log(err);
        })
        setUser({
            name: "",
            email: "",
            phone: "",
            comment: "",
            type:"contact"
        })
    }
    return (
        <>
            <ResNavbar />
            <div className="container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <LocationOnIcon className="fas fa-map-marker-alt" />
                            <div className="topic">Address</div>
                            <div className="text-one">Ramleela Maidan, Khojwa</div>
                            <div className="text-two">Durgakund (Varanasi), 221010</div>
                        </div>
                        <div className="phone details">
                            <CallIcon className="fas fa-phone-alt" />
                            <div className="topic">Phone</div>
                            <div className="text-two">+91 9142609127</div>
                        </div>
                        <div className="email details">
                            <MailIcon className="fas fa-envelope" />
                            <div className="topic">Email</div>
                            <div className="text-one">careerbanao20@gmail.com</div>
                        </div>
                    </div> 
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p> */}
                        <form onSubmit={submit}>
                            <div className="input-box">
                                <input onChange={changeEventHandler} value={user.name} name="name" type="text" placeholder="Name" required />
                            </div>
                            <div className="input-box">
                                <input onChange={changeEventHandler} value={user.email} name="email" type="email" placeholder="Email" required />
                            </div>
                            <div className="input-box">
                                <input onChange={changeEventHandler} value={user.phone} name="phone" type="phone" placeholder="Phone No" required />
                            </div>
                            <div className="input-box message-box">
                                <textarea onChange={changeEventHandler} value={user.comment} name="comment" type="text" placeholder='Message...' required />
                            </div>
                            <div className="button">
                                <input type="submit" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default Contact;