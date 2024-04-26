import React from 'react'
import { ConnectKitButton } from "connectkit";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-[#FFC046] w-full flex justify-between items-center p-[12px] px-[25px]">
        <Link to='/' className='text-xl font-bold tracking-[0.1em] cursor-pointer'>HABITUDE</Link>
        <div className='space-x-7 flex flex-row'>
          <Link to='/explore' className='hover:text-white font-semibold'>Explore</Link>
          <Link to='/dashboard' className='hover:text-white font-semibold'>Dashboard</Link>
          <Link to='/leaderboard' className='hover:text-white font-semibold'>Leaderboard</Link>
          <Link to='/profile' className='hover:text-white font-semibold'>Profile</Link>
        </div>
        <ConnectKitButton />
      </div>
  )
}

export default Navbar
