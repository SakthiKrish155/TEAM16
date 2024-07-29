import React from 'react'
import { Button } from '../ui/button'
import { NavLink } from 'react-router-dom'

const UserLeftbar = () => {
    const AdminLinks = [
        {
            title: "Dashboard",
            path: "./user/dashboard",
            // icon: ,
        },{
            title: "User",
            path: "./admin/users"
        }
    
    ]
  return (
    <>
    <div className='flex justify-center items-center bg-primary absolute w-44 h-4/5 -bottom-16 left-28 rounded-s rounded-e'>
    <div className='h-screen w-1/6 flex justify-center items-center flex-col pt-10'>
        <div className='h-5/6 w-full flex flex-col items-center justify-start absolute'>
            {
                AdminLinks.map((data, index)=>(
                    <NavLink key={index} to={data.path} className={''}>
                        <span>
                            {data.title}
                        </span>
                    </NavLink>
                    
                ))
            }
        </div>
    </div>
    </div>

    </>
  )
}

export default UserLeftbar