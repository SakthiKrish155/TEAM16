import React from 'react';

const AdminUsers = () => {
  const users = [
    { user: 'User 1', details: 'Admin, Active since 2023-01-01' },
    { user: 'User 2', details: 'Manager, Active since 2023-02-15' },
    { user: 'User 3', details: 'Developer, Active since 2023-03-20' },
    { user: 'User 4', details: 'Designer, Active since 2023-04-25' },
    { user: 'User 5', details: 'Tester, Active since 2023-05-30' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Users</h1>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors mr-2">
            + Add User
          </button>
          {/* <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
            - Delete User
          </button> */}
        </div>
      </div>
      <div className="overflow-x-auto mt-4 mb-6 mx-4">
        <table className="w-full table-fixed border-separate border-spacing-2 border-gray-300">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th className="p-2 text-left text-gray-700 w-1/2">User</th>
              <th className="p-2 text-left text-gray-700 w-1/2">Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="p-2 text-gray-800">{user.user}</td>
                <td className="p-2 text-gray-800">{user.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
