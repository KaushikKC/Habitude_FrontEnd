import React from 'react'
import { ConnectKitButton } from "connectkit";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-[#FFC046] w-full flex justify-between items-center p-[12px] px-[25px]">
        <Link to='/explore' className='text-xl font-bold tracking-[0.1em] cursor-pointer'>HABITUDE</Link>
        <div className='space-x-5 flex flex-row'>
          <Link to='/explore' className='hover:text-white font-bold'>Explore</Link>
          <Link to='/' className='hover:text-white font-bold'>Dashboard</Link>
          <Link to='/' className='hover:text-white font-bold'>Profile</Link>
        </div>
        <ConnectKitButton />
      </div>
  )
}

export default Navbar
