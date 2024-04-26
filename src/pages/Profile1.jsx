import React from 'react'
import { Link } from 'react-router-dom'

function Profile1() {
  return (
    <div className='bg-blue-50 h-[100vh]'>
      <div className="bg-[#00BFFF] w-full flex justify-end p-[12px]">
          <button className="p-[10px] mx-[40px] border border-black w-[180px] rounded-lg">Connect Wallet</button>
      </div>
      <div className='flex flex-col justify-center items-center my-[30px]'>
        <p className='font-secondary font-bold text-[50px]'>Create Account</p>
      <div >
        <div className='pt-[30px]'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>NAME</p>
            <input type="text" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter your Name' />
        </div>
        <div className='py-[30px]'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>EMAIL ID</p>
            <input type="email" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter your Email ID' />
        </div>
        <div className=''>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>PASSWORD</p>
            <input type="password" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter your Password' />
        </div>
        <div className='py-[30px]'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>DATE OF BIRTH</p>
            <input type="date" className='bg-transparent w-[350px] outline-none border-b-2 border-black text-gray-400 cursor-pointer' placeholder='mm/dd/yyyy' />
        </div>
      </div>
      <Link to='/choose' className='p-[25px]'>
         <button className='bg-[#3843FF] text-white w-[350px] rounded-3xl p-[10px] hover:font-extrabold'>Next</button>
      </Link>
    </div>
    </div>
  )
}

export default Profile1
