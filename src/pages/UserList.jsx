import React ,{useState} from 'react'
import users from '../data/users.json';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const getStatusChip = (status) => {
  const base = "px-2 py-1 rounded-full text-xs font-medium";
  return status === "Active"
    ? `bg-green-100 text-green-800 ${base}`
    : `bg-red-100 text-red-800 ${base}`;
};

export default function UserList() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (hidden on small screens) */}
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
                <tr >
                  <th className="px-4 py-3 whitespace-nowrap">Name</th>
                  <th className="px-4 py-3 whitespace-nowrap">Email</th>
                  <th className="px-4 py-3 whitespace-nowrap">Role</th>
                  <th className="px-4 py-3 whitespace-nowrap">Status</th>
                  <th className="px-4 py-3 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="px-4 py-3 font-medium whitespace-nowrap">{user.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.email}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.role}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={getStatusChip(user.status)}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
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
    </div>
  );
}
