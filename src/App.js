import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EngineeringCounselling from './Components/Counselling/Engineering/EngineeringCounselling';
import MedicalCounselling from './Components/Counselling/Medical/MedicalCounselling';
import Home from './Components/Home/Home';
import EngineeringResult from './Components/Result/Engineering/EngineeringResult';
import MedicalResult from './Components/Result/Medical/MedicalResult';
import EngineeringAdmitCard from './Components/Admitcard/Engineering/EngineeringAdmitCard';
import MedicalAdmitCard from './Components/Admitcard/Medical/MedicalAdmitCard';
import Contact from './Components/Contact/Contact';
 
// import DashBoard from './Components/DashBoard/DashBoard';
import ECounselling from './Components/Counselling/Engineering/ECounselling';
import ApplyHome from './Components/Counselling/Engineering/ApplyHome';
 
function App() {
  return (
    <div className="App">
      {/* <DashBoard/> */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering" element={<EngineeringCounselling />} />
          <Route path="/medical" element={<MedicalCounselling />} />
          <Route path="/engineeringresult" element={<EngineeringResult/>} />
          <Route path="/medicalresult" element={<MedicalResult/>} />
          <Route path="/engineeringadmitcard" element={<EngineeringAdmitCard/>} />
          <Route path="/medicaladmitcard" element={<MedicalAdmitCard/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/counselling" element={<ECounselling/>} />
          <Route path="/applyhome" element={<ApplyHome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
