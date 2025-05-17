import React from 'react'

const jobs = [
    { title: "Sales Executive", company: "Access Bank", time: "20 mins ago", logo: "💼" },
    { title: "User Experience Designer", company: "Paga", time: "10 mins ago", logo: "🎨" },
    { title: "Product Manager", company: "TPAY", time: "5 mins ago", logo: "🧠" },
  ];
  
  export default function JobCard() {
    return (
      <div className="space-y-2">
        {jobs.map((job, idx) => (
          <div key={idx} className="flex items-center bg-white p-4 rounded shadow">
            <div className="text-2xl mr-4">{job.logo}</div>
            <div className="flex-1">
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>
            <span className="text-xs text-gray-400">{job.time}</span>
          </div>
        ))}
      </div>
    );
  }
  
