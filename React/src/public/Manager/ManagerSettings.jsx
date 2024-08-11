import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaUser, FaEnvelope, FaLock, FaQuestionCircle, FaSignOutAlt, FaTrashAlt, FaGlobe, FaSave, FaEdit } from 'react-icons/fa';
// import { authService } from '@/services/auth'; // Assume you have this service for authentication

const ManagerSettings = () => {
  const [username, setUsername] = useState('JohnDoe'); // Initial state should be fetched from user data
  const [email, setEmail] = useState('john.doe@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [language, setLanguage] = useState('English');
  const [timeZone, setTimeZone] = useState('GMT');
  const [profileVisibility, setProfileVisibility] = useState('Public');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Implement save logic here
    setIsEditing(false); // Disable editing after saving
  };

  const handleDeleteAccount = () => {
    // Implement delete account logic here
  };

  const handleLogout = () => {
    authService.SignOut();
    window.location.href = '/login'; // Redirect to login page
  };

  const handleViewHelp = () => {
    // Implement view help logic here
    window.location.href = '/help'; // Redirect to help page
  };

  return (
    <div className='flex justify-center items-center'>
      <div className="p-6 h-full w-5/6 bg-background text-foreground rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <section className="mb-6 flex items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-center">Profile</h2>
            <FaEdit
              className={`text-gray-500 ml-2 cursor-pointer ${isEditing ? 'text-blue-500' : ''}`}
              onClick={() => setIsEditing(!isEditing)}
            />
          </div>
          {isEditing && (
            <Button
              onClick={handleSave}
              className="bg-blue-500 text-white flex items-center"
            >
              <FaSave className="mr-2" />
              Save Changes
            </Button>
          )}
        </section>

        <div className="mb-6">
          <label className="flex items-center mb-4">
            <FaUser className="text-gray-500 mr-2" />
            <Input
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="flex-1"
              disabled={!isEditing}
            />
          </label>
          <label className="flex items-center mb-4">
            <FaEnvelope className="text-gray-500 mr-2" />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1"
              disabled={!isEditing}
            />
          </label>
          <label className="flex items-center mb-4">
            <FaLock className="text-gray-500 mr-2" />
            <Input
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              className="flex-1"
              disabled={!isEditing}
            />
          </label>
          <label className="flex items-center mb-4">
            <FaLock className="text-gray-500 mr-2" />
            <Input
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter a new password"
              className="flex-1"
              disabled={!isEditing}
            />
          </label>
        </div>

        <section className="mb-6">
          <label className="flex items-center mb-4">
            <Button
              onClick={handleViewHelp}
              className="bg-blue-500 text-white flex items-center"
            >
              <FaQuestionCircle className="mr-2" />
              View Help
            </Button>
          </label>
        </section>

        <section className="flex justify-between mb-6">
          <Button
            onClick={handleDeleteAccount}
            className="text-red-700 bg-transparent hover:text-red-500 hover:bg-transparent flex items-center"
          >
            <FaTrashAlt className="mr-2" />
            Delete Account
          </Button>
          <Button
            onClick={handleLogout}
            className="bg-red-500 text-white flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </Button>
        </section>
      </div>
    </div>
  );
};

export default ManagerSettings;
