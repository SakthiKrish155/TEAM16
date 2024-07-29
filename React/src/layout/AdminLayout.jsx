import Navbar from '@/components/Shared/Navbar'
import AdminLeftbar from '@/components/Admin/AdminLeftbar'
import AdminTopbar from '@/components/Admin/AdminTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
    <>
    <Navbar/>
        <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto absolute top-14'>
            <AdminTopbar/>
            <div>
                <AdminLeftbar/>
            </div>
            <div className='flex justify-center items-center absolute top-36 right-12 w-9/12 h-5/6'>
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default AdminLayout