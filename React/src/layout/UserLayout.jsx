import Navbar from '@/components/Shared/Navbar'
import UserLeftbar from '@/components/User/UserLeftbar'
import UserTopbar from '@/components/User/UserTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
        <Navbar/>
            <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto absolute top-14'>
                <UserTopbar/>
                <div>
                    <UserLeftbar/>
                </div>
                <div className='flex justify-center items-center absolute top-36 right-12 w-9/12 h-5/6'>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default UserLayout