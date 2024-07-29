import { Facebook, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-t-2 border-primary/50 bg-background">
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg absolute left-5">ChronoWave.in</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 absolute right-5'>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Facebook className='h-6 w-6' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Twitter className='h-6 w-6' />
        </a>
        {/* <ModeToggle/> */}
      </div>
    </div>
  )
}

export default Footer