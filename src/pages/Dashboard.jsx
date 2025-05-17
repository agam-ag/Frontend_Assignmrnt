import React from 'react'

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import JobCard from "../components/JobCard";
import CandidateCard from "../components/CandidateCard";
import EmployeeCard from "../components/EmployeeCard";
import PayrollCard from "../components/PayrollCard";
import { FiMenu } from "react-icons/fi";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64 p-4 space-y-6">
        <Topbar />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard title="Messages" value="138" icon="📧" color="bg-yellow-400" />
          <StatCard title="Jobs" value="50" icon="💼" color="bg-blue-600" />
          <StatCard title="Candidates" value="100" icon="👥" color="bg-green-500" />
        </div>

        {/* Applied Jobs + Candidates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Applied Jobs</h3>
            <JobCard />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Candidates</h3>
            <CandidateCard />
          </div>
        </div>

        {/* Employees + Payroll */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Employees</h3>
            <EmployeeCard />
          </div>
          <div>
            <h3 className="font-semibold mb-2">April Payrolls</h3>
            <PayrollCard />
          </div>
        </div>
      </div>
    </div>
  );
}
