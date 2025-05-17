import React from 'react'

const candidates = [
    { name: "John Doe", role: "Product Manager", ats: 80, shortlisted: true },
    { name: "Ginna Loe", role: "Sales Executive", ats: 65, shortlisted: false },
    { name: "James Foo", role: "Product Manager", ats: 74, shortlisted: true },
  ];
  
  export default function CandidateCard() {
    return (
      <div className="space-y-2">
        {candidates.map((c, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div>
              <h4 className="font-semibold">{c.name}</h4>
              <p className="text-sm text-gray-500">{c.role}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                ATS: {c.ats}%
              </span>
              <span
                className={`w-3 h-3 rounded-full ${
                  c.shortlisted ? "bg-green-500" : "bg-red-500"
                }`}
                title={c.shortlisted ? "Shortlisted" : "Rejected"}
              ></span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  