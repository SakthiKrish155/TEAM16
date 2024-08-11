import React, { useState, useEffect } from 'react';
import { getTasks,getTaskById,addTask,updateTask, patchTask, deleteTask} from '@/service/api';

const TasksManager = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTask, setNewTask] = useState({
    taskname: '',
    taskdescription: '',
    duedate: '',
    taskstatus: '',
    taskpriority: '',
    project: { projectid: '' },
  });
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async () => {
    try {
      await addTask(newTask);
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleUpdateTask = async (taskId) => {
    try {
      await updateTask(taskId, selectedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handlePatchTask = async (taskId, updateData) => {
    try {
      await patchTask(taskId, updateData);
      fetchTasks();
    } catch (error) {
      console.error('Error patching task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleAssignTask = async (taskId) => {
    try {
      await assignTask(taskId, selectedUserId);
      fetchTasks();
    } catch (error) {
      console.error('Error assigning task:', error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.taskname}
          onChange={(e) => setNewTask({ ...newTask, taskname: e.target.value })}
        />
        <textarea
          placeholder="Task Description"
          value={newTask.taskdescription}
          onChange={(e) => setNewTask({ ...newTask, taskdescription: e.target.value })}
        />
        <input
          type="date"
          value={newTask.duedate}
          onChange={(e) => setNewTask({ ...newTask, duedate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Status"
          value={newTask.taskstatus}
          onChange={(e) => setNewTask({ ...newTask, taskstatus: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Priority"
          value={newTask.taskpriority}
          onChange={(e) => setNewTask({ ...newTask, taskpriority: e.target.value })}
        />
        <input
          type="text"
          placeholder="Project ID"
          value={newTask.project.projectid}
          onChange={(e) => setNewTask({ ...newTask, project: { projectid: e.target.value } })}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.taskid}>
              <h3>{task.taskname}</h3>
              <p>{task.taskdescription}</p>
              <p>Status: {task.taskstatus}</p>
              <p>Priority: {task.taskpriority}</p>
              <p>Due Date: {task.duedate}</p>
              <p>Assigned Status: {task.assignedstatus ? 'Yes' : 'No'}</p>
              <button onClick={() => setSelectedTask(task)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.taskid)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {selectedTask && (
        <div>
          <h2>Edit Task</h2>
          <input
            type="text"
            value={selectedTask.taskname}
            onChange={(e) => setSelectedTask({ ...selectedTask, taskname: e.target.value })}
          />
          <textarea
            value={selectedTask.taskdescription}
            onChange={(e) => setSelectedTask({ ...selectedTask, taskdescription: e.target.value })}
          />
          <input
            type="date"
            value={selectedTask.duedate}
            onChange={(e) => setSelectedTask({ ...selectedTask, duedate: e.target.value })}
          />
          <input
            type="text"
            value={selectedTask.taskstatus}
            onChange={(e) => setSelectedTask({ ...selectedTask, taskstatus: e.target.value })}
          />
          <input
            type="text"
            value={selectedTask.taskpriority}
            onChange={(e) => setSelectedTask({ ...selectedTask, taskpriority: e.target.value })}
          />
          <input
            type="text"
            value={selectedTask.project?.projectid || ''}
            onChange={(e) => setSelectedTask({ ...selectedTask, project: { projectid: e.target.value } })}
          />
          <button onClick={() => handleUpdateTask(selectedTask.taskid)}>Update Task</button>
        </div>
      )}

      <div>
        <h2>Assign Task</h2>
        <input
          type="text"
          placeholder="User ID"
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        />
        <button onClick={() => handleAssignTask(selectedTask?.taskid)}>Assign Task</button>
      </div>
    </div>
  );
};

export default TasksManager;
