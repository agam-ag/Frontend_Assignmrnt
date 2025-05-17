import React, { useState } from 'react';
import users from '../data/users.json';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { FiX } from 'react-icons/fi';

const getStatusChip = (status) => {
  const base = "px-2 py-1 rounded-full text-xs font-medium";
  return status === "Active"
    ? `bg-green-100 text-green-800 ${base}`
    : `bg-red-100 text-red-800 ${base}`;
};

export default function UserList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // modal user

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Topbar */}
        <div className="sticky top-0 z-10 bg-white shadow md:ml-64 md:p-4">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="p-4 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h1 className="text-2xl font-bold">User List</h1>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Export
            </button>
          </div>

          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-blue-50 text-gray-700 text-left">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-blue-50 transition cursor-pointer"
                    onClick={() => setSelectedUser(user)}
                  >
                    <td className="px-4 py-3 font-medium">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.role}</td>
                    <td className="px-4 py-3">
                      <span className={getStatusChip(user.status)}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700">
                        Actions
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 z-50 flex items-center justify-center">
          <div
            className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg transform transition-all duration-300 scale-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">User Details</h2>
              <button onClick={() => setSelectedUser(null)} className="text-xl hover:text-red-500">
                <FiX />
              </button>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Name:</span> {selectedUser.name}</p>
              <p><span className="font-semibold">Email:</span> {selectedUser.email}</p>
              <p><span className="font-semibold">Role:</span> {selectedUser.role}</p>
              <p>
                <span className="font-semibold">Status:</span>{' '}
                <span className={getStatusChip(selectedUser.status)}>
                  {selectedUser.status}
                </span>
              </p>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedUser(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

