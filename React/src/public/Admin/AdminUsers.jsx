import React, { useState, useEffect } from 'react';
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
import { Trash } from 'lucide-react';
import { toast } from 'sonner';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { deleteUserById, getUsers } from '@/service/api';

const AdminUsers = () => {
  const [userToDelete, setUserToDelete] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend when component mounts
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); // Assuming response.data contains the user data
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    
    fetchUsers();
  }, []);

  const handleDeleteUser = async () => {
    if (userToDelete) {
      try {
        console.log(userToDelete)
        await deleteUserById(userToDelete);
        setUserToDelete(null);
        toast.success("User deleted successfully!");
        
        // Refresh user list
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to delete user", error);
        toast.error("Failed to delete user.");
      }
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-secondary text-secondary-foreground">Application Users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">User ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Role</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Email</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Contact</TableHead>
              <TableHead className="text-right bg-primary text-primary-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userid} className="bg-card">
                <TableCell className="font-medium text-foreground">{user.userid}</TableCell>
                <TableCell className="text-foreground">{user.name}</TableCell>
                <TableCell className="text-foreground">{user.role}</TableCell>
                <TableCell className="text-foreground">{user.email}</TableCell>
                <TableCell className="text-foreground">{user.contact}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant="outline"
                        className="mr-2"
                        onClick={() => setUserToDelete(user.userid)}
                      >
                        <Trash /> Delete
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='p-4 bg-card text-card-foreground rounded shadow-lg'>
                      <p className='text-sm'>Are you sure you want to delete this user?</p>
                      <div className='flex justify-end mt-4'>
                        <Button
                          className='mr-2'
                          variant='destructive'
                          onClick={handleDeleteUser}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant='outline'
                          // onClick={() => setUserToDelete(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsers;
