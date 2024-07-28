import React from 'react';

const Alltasks = () => {
  const tasks = [
    { userId: '01', task: 'Draft Project Proposal' },
    { userId: '02', task: 'Conduct Team Meeting' },
    { userId: '03', task: 'Create Documentation' },
    { userId: '04', task: 'Plan Marketing Campaign' },
    { userId: '05', task: 'Implement New Software Tool' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      <div className="overflow-x-auto mt-4 mb-6 mx-4">
        <table className="w-full table-fixed border-separate border-spacing-2 border-gray-300">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th className="p-2 text-left text-gray-700 w-1/4">User ID</th>
              <th className="p-2 text-left text-gray-700 w-3/4">Assigned Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="p-2 text-gray-800">{task.userId}</td>
                <td className="p-2 text-gray-800">{task.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltasks;
