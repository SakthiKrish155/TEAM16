import React from 'react';

const Completed = () => {
  const tasks = [
    { userId: '01', task: 'Draft Project Proposal' },
    { userId: '02', task: 'Conduct Team Meeting' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Completed✅</h1>
      <div className="overflow-x-auto mt-4 mb-6 mx-4">
        <table className="w-full border-separate border-spacing-2 border-gray-300">
          <thead className="bg-gray-100 border-b-2 border-gray-300">
            <tr>
              <th className="p-2 text-left text-gray-600">User ID</th>
              <th className="p-2 text-left text-gray-600">Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="hover:bg-gray-50">
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

export default Completed;
