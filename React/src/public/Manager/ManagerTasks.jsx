import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash } from 'lucide-react';
import { getTasks, getTaskById, addTask, updateTask, deleteTask, getUsers, getProjects } from '@/service/api';

const ManagerTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    taskid: "",
    taskname: "",
    taskdescription: "",
    taskpriority: "Low",
    taskstatus: "Pending",
    assignedto: "", // Stores the selected user id
    projectid: ""   // Stores the selected project id
  });
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tasksData, usersData, projectsData] = await Promise.all([
          getTasks(),
          getUsers(),
          getProjects(),
        ]);
        setTasks(tasksData.data);
        setUsers(usersData.data);
        setProjects(projectsData.data);
        console.log(projectsData.data);
        console.log(usersData.data);
        console.log(formData.data);
        console.log(tasksData.data);
      } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message || error);
      }
    };

    fetchData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = {
        taskname: formData.taskname,
        taskdescription: formData.taskdescription,
        taskpriority: formData.taskpriority,
        taskstatus: formData.taskstatus,
        assignedto: formData.assignedto,
        projectid: formData.projectid
      };

      if (formData.taskid) {
        await updateTask(formData.taskid, taskData); // Include taskid, assignedto, and projectid
      } else {
        await addTask(taskData); // Include assignedto and projectid
      }

      const tasksData = await getTasks();
      setTasks(tasksData.data);
      setFormVisible(false);
      setFormData({
        taskid: "",
        taskname: "",
        taskdescription: "",
        taskpriority: "Low",
        taskstatus: "Pending",
        assignedto: "",
        projectid: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message || error);
    }
};


  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      const tasksData = await getTasks();
      setTasks(tasksData.data);
    } catch (error) {
      console.error("Error deleting task:", error.response?.data || error.message || error);
    }
  };

  const handleEdit = async (taskId) => {
    try {
      const taskData = await getTaskById(taskId);
      const task = taskData.data;
      setFormData({
        taskid: task.taskid,
        taskname: task.taskname,
        taskdescription: task.taskdescription,
        taskpriority: task.taskpriority,
        taskstatus: task.taskstatus,
        assignedto: task.assignedto, // Ensure default value if undefined
        projectid: task.projectid// Ensure default value if undefined
      });
      setFormVisible(true);
    } catch (error) {
      console.error("Error fetching task details:", error.response?.data || error.message || error);
    }
  };

  // const getUserName = (userId) => {
  //   if (userId)
  //     return users.find((user) => user.userid === userId);
  // };

  // const getProjectName = (projectId) => {
  //   if (!projectId) return 'Unknown';
  //   const project = projects.find((project) => project.projectid === projectId);
  //   return project ? project.projectname : 'Unknown';
  // };

  return (
    <div className='h-full w-full flex justify-center items-center p-7'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-muted text-muted-foreground">Ongoing Tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">Task ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Task Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Task Description</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Priority</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Status</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Assigned To</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Project Name</TableHead>
              <TableHead className="bg-primary flex justify-center items-center text-primary-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.taskid} className="bg-card hover:bg-primary/10 hover:text-primary-foreground">
                <TableCell className="font-medium text-foreground">{task.taskid}</TableCell>
                <TableCell className="text-foreground">{task.taskname}</TableCell>
                <TableCell className="text-foreground">{task.taskdescription}</TableCell>
                <TableCell className="text-foreground">{task.taskpriority}</TableCell>
                <TableCell className="text-foreground">{task.taskstatus}</TableCell>
                <TableCell className="text-foreground">{task.assignedto}</TableCell>
                <TableCell className="text-foreground">{task.projectid}</TableCell>
                <TableCell className="text-foreground flex space-x-5 justify-center items-center">
                  <Button onClick={() => handleEdit(task.taskid)} className="bg-primary flex text-primary-foreground hover:bg-primary-dark">
                    <Edit /> Edit
                  </Button>
                  <Button onClick={() => handleDelete(task.taskid)} className="bg-destructive text-destructive-foreground hover:bg-destructive-dark">
                    <Trash /> Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='flex justify-center bg-transparent m-5'>
            <Button className='flex justify-center items-center bg-primary text-primary-foreground hover:bg-primary-dark' onClick={() => setFormVisible(true)}>
              <Plus /> Add Task
            </Button>
          </TableFooter>
        </Table>

        {isFormVisible && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-card p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h2 className='text-xl font-bold mb-4 text-foreground'>Add/Edit Task</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='taskname'>Task Name</label>
                  <input
                    id='taskname'
                    name='taskname'
                    type='text'
                    value={formData.taskname}
                    onChange={handleFormChange}
                    className='mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='taskdescription'>Task Description</label>
                  <textarea
                    id='taskdescription'
                    name='taskdescription'
                    value={formData.taskdescription}
                    onChange={handleFormChange}
                    className='mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='taskpriority'>Task Priority</label>
                  <select
                    id='taskpriority'
                    name='taskpriority'
                    value={formData.taskpriority}
                    onChange={handleFormChange}
                    className='mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='taskstatus'>Task Status</label>
                  <select
                    id='taskstatus'
                    name='taskstatus'
                    value={formData.taskstatus}
                    onChange={handleFormChange}
                    className='mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='assignedto'>Assigned To</label>
                  <select
                    id='assignedto'
                    name='assignedto'
                    value={formData.assignedto}
                    onChange={handleFormChange}
                    className='mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  >
                    <option value="">Select a user</option>
                    {users.map((user) => (
                      <option key={user.userid} value={user.userid}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='projectid'>Project Name</label>
                  <select
                    id='projectid'
                    name='projectid'
                    value={formData.projectid}
                    onChange={handleFormChange}
                    className='mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
                  >
                    <option value="">Select a project</option>
                    {projects.map((project) => (
                      <option key={project.projectid} value={project.projectid}>
                        {project.projectname}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-end space-x-4'>
                  <Button type='submit' className='bg-primary text-primary-foreground hover:bg-primary-dark'>
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setFormVisible(false);
                      setFormData({
                        taskid: "",
                        taskname: "",
                        taskdescription: "",
                        taskpriority: "Low",
                        taskstatus: "Pending",
                        assignedto: "",
                        projectid: ""
                      });
                    }}
                    className='bg-muted text-muted-foreground hover:bg-muted-dark'
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerTasks;
