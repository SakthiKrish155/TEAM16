import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUserTasks, getUserIdFromEmail, patchUserTask } from '@/service/api';

const UserImportant = () => {
  const [tasks, setTasks] = useState([]);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = jwtDecode(token);
          const currentUserEmail = decodedToken.sub; 
          setEmail(currentUserEmail);

          const userIdResponse = await getUserIdFromEmail(currentUserEmail);
          setUserId(userIdResponse);

          const tasksResponse = await getUserTasks(userIdResponse);

          // Filter tasks to show only those with 'High' priority
          const importantTasks = tasksResponse.filter(task => task.taskpriority === 'High');
          setTasks(importantTasks);
        }
      } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message || error);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      // Update task status in the backend
      await patchUserTask(taskId, { taskstatus: newStatus });

      // Update task status in the state
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.taskid === taskId ? { ...task, taskstatus: newStatus } : task
        )
      );
    } catch (error) {
      console.error("Error updating task status:", error.response?.data || error.message || error);
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center p-7'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-muted text-muted-foreground">Important Tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">Task ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Task Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Task Description</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Priority</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Status</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Project Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.taskid} className="bg-card hover:bg-primary/10 hover:text-primary-foreground">
                <TableCell className="font-medium text-foreground">{task.taskid}</TableCell>
                <TableCell className="text-foreground">{task.taskname}</TableCell>
                <TableCell className="text-foreground">{task.taskdescription}</TableCell>
                <TableCell className="text-foreground">{task.taskpriority}</TableCell>
                <TableCell className="text-foreground">
                  <select
                    value={task.taskstatus}
                    onChange={(e) => handleStatusChange(task.taskid, e.target.value)}
                    className='px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  >
                    <option value='Not Started'>Not Started</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                  </select>
                </TableCell>
                <TableCell className="text-foreground">{task.project?.projectname || 'Unknown'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserImportant;
