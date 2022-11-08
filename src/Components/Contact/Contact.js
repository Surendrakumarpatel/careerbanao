import React, { useEffect } from 'react'
import "./Contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ResNavbar from '../Navbar/ResNavbar';
import axios from "axios";
import Footer from '../Body/Section_6/Footer';
import { useLocation } from "react-router-dom"
import { useFormik } from 'formik';
import { ContactValidation } from '../validation/schema/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BaseUrl} from "../baseurl/baseurl";

// getting all input field data
const initialValues = {
    name: "",
    email: "",
    phone: "",
    comment: "",
    type: "contact"
}
// url

const url = `${BaseUrl}/homeAPI`

function Contact() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    // Using formik for Form validation
    const Formik = useFormik({
        initialValues: initialValues,
        validationSchema: ContactValidation,
        onSubmit: async (values, action) => {
            await axios.post(url, JSON.stringify(values)).then((res) => {
                console.log(res.data);
                toast.success('Submitted Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }).catch((err) => {
                console.log(err);
                toast.error('Server Error', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            console.log(values);
            action.resetForm();
        }
    });
    
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
                        <form onSubmit={Formik.handleSubmit}>
                            <div className="input-box">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={Formik.values.name}
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}

                                />
                                {Formik.errors.name && Formik.touched.name ?
                                    (<p className="form-errors">{Formik.errors.name}</p>) :
                                    null
                                }

                            </div>
                            <div className="input-box">
                                <input
                                    autoComplete="off"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={Formik.values.email}
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}
                                />
                                {Formik.errors.email && Formik.touched.email ?
                                    (<p className="form-errors">{Formik.errors.email}</p>) :
                                    null
                                }

                            </div>
                            <div className="input-box">
                                <input
                                    autoComplete="off"
                                    placeholder="Phone No"
                                    type="text"
                                    name="phone"
                                    value={Formik.values.phone}
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}
                                />
                                {Formik.errors.phone && Formik.touched.phone ?
                                    (<p className="form-errors">{Formik.errors.phone}</p>) :
                                    null
                                }

                            </div>
                            <div className="input-box message-box">
                                <textarea
                                    autoComplete="off"
                                    name="comment"
                                    type="text"
                                    placeholder='Message...'
                                    value={Formik.values.comment}
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}
                                />
                            </div>
                            <div className='button'>
                                <input type="submit" value="Submit Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </>

    )
}

export default Contact;