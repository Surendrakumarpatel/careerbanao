import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EngineeringCounselling from './Components/Application/Engineering/EngineeringCounselling';
import MedicalCounselling from './Components/Application/Medical/MedicalCounselling';
import Home from './Components/Home/Home';
import EngineeringResult from './Components/Result/Engineering/EngineeringResult';
import MedicalResult from './Components/Result/Medical/MedicalResult';
import EngineeringAdmitCard from './Components/Admitcard/Engineering/EngineeringAdmitCard';
import MedicalAdmitCard from './Components/Admitcard/Medical/MedicalAdmitCard';
import Contact from './Components/Contact/Contact';
import ECounselling from './Components/Counselling/Engineering/ECounselling';
import ApplyHome from './Components/Counselling/Engineering/ApplyHome';
import ApplicationApply from './Components/Application/Engineering/ApplicationApply';
import MCounselling from './Components/Counselling/Medical/ECounselling';
import MedicalApplyHome from './Components/Counselling/Medical/MedicalApplyHome';
import MApplicationApply from './Components/Application/Medical/MApplicationApply';
import DashBoard from "./Components/DashBoard/DashBoard";
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
          <Route path="/homeAPI" element={<Contact/>} />
          <Route path="/ecounselling" element={<ECounselling/>} />
          <Route path="/mcounselling" element={<MCounselling/>} />
          <Route path="/applyhome" element={<ApplyHome/>}/>
          <Route path="/medicalapplyhome" element={<MedicalApplyHome/>} />
          <Route path="/applicationapply" element={<ApplicationApply />} />
          <Route path="/mapplicationapply" element={<MApplicationApply/>} />
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
