import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';

const AdminTopbar = () => {
    return (
        <div className='h-[8vh] w-full bg-gray-100 flex justify-center items-center'>
            <div className='w-[90%] flex items-center justify-end gap-6'>
                {/* <Avatar>
                    <AvatarImage src="" alt="@shadcn" />
                    <AvatarFallback>GG</AvatarFallback>
                </Avatar> */}
                <ModeToggle />
            </div>
        </div>
    );
}

export default AdminTopbar;
