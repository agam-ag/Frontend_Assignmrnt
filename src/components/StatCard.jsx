import React from 'react'

export default function StatCard({ title, value, icon, color }) {
    return (
      <div className={`p-4 text-white rounded shadow-md ${color}`}>
        <div className="text-3xl mb-2">{icon}</div>
        <h4 className="text-sm">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    );
  }
  
