import * as Yup from 'yup';

// Validatio for contact Page
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
var regex = /^\D*$/;
export const ContactValidation = Yup.object({
    name:Yup.string().matches(regex,"Digits are not allowed").min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    phone:Yup.string().max(10).matches(phoneRegExp,"Phone number is not valid").required("Phone number is required"),
    comment:Yup.string()
});

// Validation for Video Calls Field
export const VideoCallValidation = Yup.object({
    name:Yup.string().matches(regex,"Digits are not allowed").min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    phone:Yup.string().max(10).matches(phoneRegExp,"Phone number is not valid").required("Phone number is required"),
    
})