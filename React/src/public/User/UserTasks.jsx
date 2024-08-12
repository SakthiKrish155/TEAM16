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
import { Button } from '@/components/ui/button';
import { getTasks, updateTask, getUsers, getProjects } from '@/service/api';

const ManagerTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Decode JWT token to get the current user's ID  
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = jwtDecode(token);
          setUserId(decodedToken.sub); // Assuming 'sub' is the user ID
        }

        const [tasksData, usersData, projectsData] = await Promise.all([
          getTasks(),
          getUsers(),
          getProjects(),
        ]);
        setTasks(tasksData.data);
        setUsers(usersData.data);
        setProjects(projectsData.data);
      } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message || error);
      }
    };

    fetchData();
  }, []);

  const filteredTasks = tasks.filter(task => task.assignedto === userId);

  const handlePriorityChange = async (taskId, newPriority) => {
    try {
      await updateTask(taskId, { taskpriority: newPriority });
      const updatedTasks = tasks.map(task =>
        task.taskid === taskId ? { ...task, taskpriority: newPriority } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task priority:", error.response?.data || error.message || error);
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await updateTask(taskId, { taskstatus: newStatus });
      const updatedTasks = tasks.map(task =>
        task.taskid === taskId ? { ...task, taskstatus: newStatus } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task status:", error.response?.data || error.message || error);
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center p-7'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-muted text-muted-foreground">Your Tasks</TableCaption>
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
            {filteredTasks.map((task) => (
              <TableRow key={task.taskid} className="bg-card hover:bg-primary/10 hover:text-primary-foreground">
                <TableCell className="font-medium text-foreground">{task.taskid}</TableCell>
                <TableCell className="text-foreground">{task.taskname}</TableCell>
                <TableCell className="text-foreground">{task.taskdescription}</TableCell>
                <TableCell className="text-foreground">
                  <select
                    value={task.taskpriority}
                    onChange={(e) => handlePriorityChange(task.taskid, e.target.value)}
                    className='px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  >
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                  </select>
                </TableCell>
                <TableCell className="text-foreground">
                  <select
                    value={task.taskstatus}
                    onChange={(e) => handleStatusChange(task.taskid, e.target.value)}
                    className='px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  >
                    <option value='Pending'>Pending</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                  </select>
                </TableCell>
                <TableCell className="text-foreground">{<task className="projectid"></task> ? task.project.projectname : 'Unknown'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManagerTasks;
