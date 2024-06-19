import React from "react";

import img1 from "../../src/assets/Images/graduation (1).png";
import img2 from "../../src/assets/Images/complaint.png";
import img3 from "../../src/assets/Images/binoculars (1).png";
import img4 from "../../src/assets/Images/image 3.png";

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: "#fffcf1" }}>
      <h1 className="text-4xl font-bold mb-6 text-center text-slate-800">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Degree Clearances */}
        <div className="bg-gradient-to-b from-[#f0e8c9]  to-[#fffdf6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="p-6 bg-gradient-to-b from-[#FFC344] to-[#fff] border border-white shadow-lg rounded-full m-4">
              <img
                src={img1}
                className="w-16 h-16 object-contain"
                alt="Degree Clearances"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-slate-700">
              Degree Clearances
            </h2>
            <div className="text-gray-700">
              <p>Total: 500</p>
              <p>Pending: 123</p>
              <p>Approved: 300</p>
              <p>Rejected: 77</p>
            </div>
          </div>
        </div>
        {/* Lost & Found Reports */}
        <div className="bg-gradient-to-b from-[#f0e8c9]  to-[#fffdf6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="p-6 bg-gradient-to-b from-[#FFC344] to-[#fff] border border-white shadow-lg rounded-full m-4">
              <img
                src={img3}
                className="w-16 h-16 object-contain"
                alt="Lost & Found Reports"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-slate-700">
              Lost & Found
            </h2>
            <div className="text-gray-700">
              <p>Total: 150</p>
              <p>New: 45</p>
              <p>Resolved: 85</p>
              <p>Pending: 20</p>
            </div>
          </div>
        </div>
        {/* Complaints */}
        <div className="bg-gradient-to-b from-[#f0e8c9] to-[#fffdf6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="p-6 bg-gradient-to-b from-[#FFC344] to-[#fff] border border-white shadow-lg rounded-full m-4">
              <img
                src={img2}
                className="w-16 h-16  object-contain"
                alt="Complaints"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-slate-700">
              Complaints
            </h2>
            <div className="text-gray-700">
              <p>Total: 200</p>
              <p>Unresolved: 89</p>
              <p>Resolved: 111</p>
              <p>Pending: 30</p>
            </div>
          </div>
        </div>
        {/* Exam Queries */}
        <div className="bg-gradient-to-b from-[#f0e8c9] to-[#fffdf6] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="p-6 bg-gradient-to-b from-[#FFC344] to-[#fff] border border-white shadow-lg rounded-full m-4">
              <img
                src={img4}
                className="w-16 h-16 object-contain"
                alt="Exam Queries"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-slate-700">
              Exam Queries
            </h2>
            <div className="text-gray-700">
              <p>Total: 100</p>
              <p>Pending: 30</p>
              <p>Resolved: 60</p>
              <p>Rejected: 10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-slate-700">
          Recent Activities
        </h2>
        <div className="bg-[#efead9] p-6 rounded-2xl shadow-lg border-gray-300">
          <p className="text-gray-700">No recent activities.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
