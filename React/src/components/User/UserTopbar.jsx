import React from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'

const UserTopbar = () => {
    return (
        <>
        <div className='w-11/12 h-1/4 flex justify-center items-center absolute right-12 bg-primary rounded-e rounded-s'>
        <div className='absolute flex justify-center items-center w-full'>
            <Avatar className=' bg-gray-400 flex justify-center items-center w-28 h-28 text-3xl font-bold text-background absolute left-48'>MS</Avatar>
            <div className='flex justify-start absolute left-96 flex-col gap-2 text-background'>
                <div>Name : User</div>
                <div>Email : User@gamil.com</div>
            </div>
            <div className='w-full flex justify-center items-center mr-10'>
            <Button className='bg-gray-400 border-gray-400 border-2 absolute right-20'>Logout</Button>
            </div>
        </div>
        </div>
        </>
    )
}

export default UserTopbar