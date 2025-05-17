import React from 'react'

const payrolls = [
    { name: "John Doe", role: "Product Manager", salary: "₦500,000", status: "Paid" },
    { name: "Ginna Loe", role: "Sales Executive", salary: "₦150,000", status: "Processing" },
    { name: "James Foo", role: "Product Manager", salary: "₦320,000", status: "Processing" },
  ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  
  export default function PayrollCard() {
    return (
      <div className="space-y-2">
        {payrolls.map((p, idx) => (
          <div key={idx} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <div>
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-sm text-gray-500">{p.role}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{p.salary}</p>
              <span className={`text-xs px-2 py-1 rounded ${getStatusColor(p.status)}`}>
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
