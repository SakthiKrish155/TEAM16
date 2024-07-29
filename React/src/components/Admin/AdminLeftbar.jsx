import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from 'lucide-react'

const AdminLeftbar = () => {
    const AdminLinks = [
        {
            title: "Dashboard",
            path: "./admin/dashboard",
        }, {
            title: "User",
            path: "./admin/users"
        }

    ]
    return (
        <div className='flex justify-center items-center bg-gray-300 absolute w-44 h-4/5 -bottom-16 left-28 rounded-s rounded-e'>
            <div className='h-screen w-1/6 flex justify-center items-center flex-col pt-10'>
                <div className='h-5/6 w-full flex flex-col items-center justify-start absolute'>
                    {
                        AdminLinks.map((data, index) => (
                            <NavLink key={index} to={data.path} className={''}>
                                <span className='font-bold text-xl font-serif'>
                                    {data.title}
                                </span>
                            </NavLink>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminLeftbar