import React from 'react'
import { ConnectKitButton } from "connectkit";

function Navbar() {
  return (
    <div className="bg-[#00BFFF] w-full flex justify-between items-center p-[12px] px-[25px]">
        <h1 className='text-xl font-bold tracking-[0.1em] cursor-pointer'>HABITUDE</h1>
        <ConnectKitButton />
      </div>
  )
}

export default Navbar
