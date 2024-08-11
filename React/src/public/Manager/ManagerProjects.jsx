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
import axios from 'axios';

const API_URL = "http://localhost:8080";

const getProjects = () => axios.get(`${API_URL}/projects/findAll`);
const getProjectById = (projectId) => axios.get(`${API_URL}/projects/findById/${projectId}`);
const addProject = (project) => axios.post(`${API_URL}/projects/add`, project);
const updateProject = (projectId, project) => axios.put(`${API_URL}/projects/update/${projectId}`, project);
const deleteProject = (projectId) => axios.delete(`${API_URL}/projects/delete/${projectId}`);

// Function to get the current project manager's details
const getCurrentUser = async () => {
  // Replace with actual implementation to get the current user's details
  return { id: "manager-id", name: "John Doe" };
};

const ManagerProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    projectname: "",
    projectdescription: "",
    duedate: ""
  });
  const [managerId, setManagerId] = useState(""); // Store manager ID separately

  useEffect(() => {
    const fetchData = async () => {
      try {
        const manager = await getCurrentUser();
        setManagerId(manager.id); // Set manager ID

        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
      // Convert date to the correct format for backend
      const formattedDueDate = new Date(formData.duedate).toISOString().split('T')[0];

      // Include managerId in the data sent to the backend
      const projectData = {
        ...formData,
        duedate: formattedDueDate,
        managerid: managerId
      };

      if (formData.id) {
        await updateProject(formData.id, projectData);
      } else {
        await addProject(projectData);
      }

      const response = await getProjects(); // Refresh project list
      setProjects(response.data);
      setFormVisible(false); // Hide form after submission
      setFormData({
        id: "",
        projectname: "",
        projectdescription: "",
        duedate: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
      const response = await getProjects(); // Refresh project list
      setProjects(response.data);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleEdit = async (projectId) => {
    try {
      const response = await getProjectById(projectId);
      const project = response.data;
      setFormData({
        id: project.id,
        projectname: project.name,
        projectdescription: project.description,
        duedate: project.dueDate
      });
      setFormVisible(true);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-muted text-muted-foreground">Current Projects</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">Project ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Project Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Due Date</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="bg-card">
                <TableCell className="font-medium text-foreground">{project.id}</TableCell>
                <TableCell className="text-foreground">{project.name}</TableCell>
                <TableCell className="text-foreground">{project.dueDate}</TableCell>
                <TableCell className="text-foreground">
                  <Button onClick={() => handleEdit(project.id)}><Edit /> Edit</Button>
                  <Button onClick={() => handleDelete(project.id)}><Trash /> Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='flex justify-center bg-transparent m-5'>
            <Button className='flex justify-center items-center bg-primary text-primary-foreground' onClick={() => setFormVisible(true)}>
              <Plus /> Add Project
            </Button>
          </TableFooter>
        </Table>

        {/* Form Modal */}
        {isFormVisible && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-card p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h2 className='text-xl font-bold mb-4 text-foreground'>Add/Edit Project</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='projectname'>Project Name</label>
                  <input
                    id='projectname'
                    name='projectname'
                    type='text'
                    value={formData.projectname}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='projectdescription'>Description</label>
                  <textarea
                    id='projectdescription'
                    name='projectdescription'
                    value={formData.projectdescription}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='duedate'>Due Date</label>
                  <input
                    id='duedate'
                    name='duedate'
                    type='date'
                    value={formData.duedate}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='flex justify-end'>
                  <Button type='submit' className='mr-4 bg-primary text-primary-foreground'>Submit</Button>
                  <Button type='button' onClick={() => setFormVisible(false)} variant='outline'>Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerProjects;
