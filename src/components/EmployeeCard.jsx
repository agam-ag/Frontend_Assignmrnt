import React from 'react'

const employees = [
    { name: "John Doe", role: "Product Manager" },
    { name: "Ginna Loe", role: "Sales Executive" },
    { name: "John Dore", role: "UI/UX Designer" },
  ];
  
  export default function EmployeeCard() {
    return (
      <div className="space-y-2">
        {employees.map((emp, idx) => (
          <div key={idx} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <div>
              <h4 className="font-semibold">{emp.name}</h4>
              <p className="text-sm text-gray-500">{emp.role}</p>
            </div>
            <div className="flex gap-2">
              <button className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200">
                View
              </button>
              <button className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
