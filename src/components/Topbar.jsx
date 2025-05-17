import React from 'react'

export default function Topbar() {
    return (
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <select className="border p-2 rounded text-sm">
            <option>All Candidates</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded text-sm"
          />
        </div>
        <div className="flex gap-3 items-center text-xl">
          <span>🔔</span>
          <span>🛠️</span>
          <span>📧</span>
        </div>
      </div>
    );
  }
  
