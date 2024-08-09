import { ModeToggle } from '@/components/toggle-theme'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { CircleHelp, Clipboard, Home, Layers, LucideSettings, Power, Settings, Settings2, Settings2Icon, StickyNote, User2Icon, UserCircleIcon } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ManagerDashboard = () => {
  const AdminLinks = [
    {
      title: 'Dashboard',
      link: '/manager/content',
      icon: Home
    },
    {
      title: 'Projects',
      link: '/manager/projects',
      icon: User2Icon
    },
    {
      title: 'Tasks',
      link: '/manager/tasks',
      icon: Clipboard
    },
    {
        title:'Setting',
        link:'manager/settings',
        icon:Settings
    }
  ]

  return (
    <div className='h-screen w-1/6 flex flex-col justify-center items-center '>
      <div className='h-[5%] text-primary font-bold text-l flex flex-col justify-between items-center'>
        <img src='https://ik.imagekit.io/s06oi31ye/Images/logo-transparent-svg.svg?updatedAt=1722052288163' className='h-60 w-60' />
      </div>
      <div className='h-[90%] w-full flex flex-col justify-center items center gap-2'>
        {
          AdminLinks.map((data, index) => (
            <NavLink key={index} to={data.link} className=' font-bold mt-2 w-full'>
              <span className='hover:bg-primary/50 flex justify-start items-center py-2 my-1 font-medium rounded-md cursor-pointer'>
                {React.createElement(data.icon, { size: 20, className: "flex gap-3 mr-5 ml-5" })}
                {data.title}
              </span>
            </NavLink>
          ))
        }
        <hr className="my-3" />
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        {/* <div className='p-0 m-0 w-full flex flex-row justify-between items-center gap-3'> */}
        {/* <div className='w-2/3 flex justify-center items-center'>
            <Button className="bg-background hover:bg-transparent font-bold flex items-center justify-center">
              <span className="text-foreground flex items-center justify-center">
                <CircleHelp />
              </span>
            </Button>
          </div> */}
        <div>
          {/* <Link to="/" className="w-1/3">
              <Button className="bg-background hover:bg-transparent font-bold flex items-center justify-center">
                <span className="text-red-500 flex items-center justify-center">
                  <Power size={20} />
                </span>
              </Button>
            </Link> */}
          <div className='h-[8vh] w-full flex justify-center items-center gap-9'>
            <div className='w-full h-full flex items-center justify-start'>
              {/* <Skeleton className="w-[100px] h-[20px] rounded-full" />*/}
              <div class="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback >AD</AvatarFallback>
                </Avatar>
                <div class="font-medium text-primary">
                  <div>Jese Leos</div>
                </div>
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ManagerDashboard