import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';

const Topbar = () => {
    return (
        <div className='h-[8vh] w-full bg-gray-100 flex justify-center items-center'>
            <div className='w-[90%] flex items-center justify-end gap-6'>
                {/* <Avatar>
                    <AvatarImage src="https://as1.ftcdn.net/v2/jpg/04/90/66/56/1000_F_490665646_Bk4Q82HOYufZzxDzar2ifMjEs4I1PnOZ.jpg" alt="@shadcn" />
                    <AvatarFallback>SS</AvatarFallback>
                </Avatar> */}
                <ModeToggle />
            </div>
        </div>
    );
}

export default Topbar;
