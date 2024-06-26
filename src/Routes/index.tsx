import { Routes, Route } from "react-router-dom";
import GetStarted from "../Container/GetStarted/GetStarted";
import SignUp from "../Container/SignUp/SignUp";
import SignIn from "../Container/LogIn/LogIn";
import Home from "../Container/Home/Home";
import DegreeClearance from "../Container/DegreeClearance/DegreeClearance";
import LostFoundReport from "../Container/LostFoundReport/LostFoundReport";
import Complaint from "../Container/Complaints/Complaint";
import ExamQuries from "../Container/ExamQuries/ExamQuries";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/Sign-Up" element={<SignUp />} />
      <Route path="/Log-In" element={<SignIn />} />
      <Route path="/Dashboard" element={<Home />} />
      <Route path="/Degree" element={<DegreeClearance />} />
      <Route path="/Lost-Found-Report" element={<LostFoundReport />} />
      <Route path="/Complaints" element={<Complaint />} />
      <Route path="/Exam-Quries" element={<ExamQuries />} />
    </Routes>
  );
};

export default RoutesPage;
