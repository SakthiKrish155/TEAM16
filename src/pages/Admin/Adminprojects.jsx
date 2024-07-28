import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Adminprojects = () => {
  const [projects, setProjects] = useState([
    { description: 'Website Design', manager: 'Gokul', endDate: '2024-09-30', status: 'In Progress' },
    { description: 'Launch Social Media Campaign', manager: 'Harish', endDate: '2024-07-25', status: 'Completed' },
    { description: 'Develop Mobile App', manager: 'Karan', endDate: '2024-10-11', status: 'In Progress' },
    { description: 'Upgrade Server Infrastructure', manager: 'Anitha', endDate: '2024-11-15', status: 'In Progress' },
    { description: 'Conduct Market Research', manager: 'Deepika', endDate: '2024-07-17', status: 'Completed' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({ description: '', manager: '', endDate: '', status: 'Not Started' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({ description: '', manager: '', endDate: '', status: 'Not Started' });
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Projects</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
              onClick={() => setShowForm(true)}
            >
              + Add Project
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Project</SheetTitle>
              <SheetDescription>
                Fill in the details of the new project and click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Project Description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="manager" className="text-right">
                    Project Manager
                  </Label>
                  <Input
                    id="manager"
                    name="manager"
                    value={newProject.manager}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="endDate" className="text-right">
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={newProject.endDate}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <select
                    id="status"
                    name="status"
                    value={newProject.status}
                    onChange={handleInputChange}
                    className="col-span-3 px-3 py-2 border rounded-lg"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                    Save Project
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="overflow-x-auto mt-4 mb-6 mx-4">
        <table className="w-full table-fixed border-separate border-spacing-2 border-gray-300">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th className="p-2 text-left text-gray-700 w-1/4">Project Description</th>
              <th className="p-2 text-left text-gray-700 w-1/4">Project Manager</th>
              <th className="p-2 text-left text-gray-700 w-1/4">End Date</th>
              <th className="p-2 text-left text-gray-700 w-1/4">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="p-2 text-gray-800">{project.description}</td>
                <td className="p-2 text-gray-800">{project.manager}</td>
                <td className="p-2 text-gray-800">{project.endDate}</td>
                <td className="p-2 text-gray-800">{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminprojects;
