import React from 'react'
import Navbar from '../components/Navbar'
import img1 from "../images/kaushik.png"

function Leaderboard() {
  return (
    <div className='bg-gradient-to-r from-[#3843FF] via-blue-60 to-[#5258ca] flex flex-col justify-center items-center bg-blue-50 '>
      <Navbar />
      <div className=' text-white font-secondary flex flex-col items-center mt-[30px]'> 
    <p className='font-secondary font-bold text-[40px] m-[30px]'>Leaderboard 🏁</p>
      <div className='flex items-center space-x-20 bg-white rounded-lg w-[500px] my-[30px] text-black'>
        <p className='border-2 border-gray-300 rounded-full w-11 p-[10px] m-[20px] text-center'>1</p>
        <div>
            <p className=''>Kaushik</p>
            <p className='text-gray-400 text-[18px]'>190 Points</p>
        </div>
        <img src={img1} alt="" className='h-[60px] w-[60px] rounded-full' />
      </div>
      <div className='flex items-center space-x-20 bg-white rounded-lg w-[500px] mb-[30px] text-black'>
        <p className='border-2 border-gray-300 rounded-full w-11 p-[10px] m-[20px] text-center'>2</p>
        <div>
            <p className=''>Chaal</p>
            <p className='text-gray-400 text-[18px]'>180 Points</p>
        </div>
        <img src={img1} alt="" className='h-[60px] w-[60px] rounded-full' />
      </div>
      <div className='flex items-center space-x-20 bg-white rounded-lg w-[500px] mb-[30px] text-black'>
        <p className='border-2 border-gray-300 rounded-full w-11 p-[10px] m-[20px] text-center'>3</p>
        <div>
            <p className=''>John</p>
            <p className='text-gray-400 text-[18px]'>170 Points</p>
        </div>
        <img src={img1} alt="" className='h-[60px] w-[60px] rounded-full' />
      </div>
      <div className='flex items-center space-x-20 bg-white rounded-lg w-[500px] mb-[30px] text-black'>
        <p className='border-2 border-gray-300 rounded-full w-11 p-[10px] m-[20px] text-center'>4</p>
        <div>
            <p className=''>Karthi</p>
            <p className='text-gray-400 text-[18px]'>160 Points</p>
        </div>
        <img src={img1} alt="" className='h-[60px] w-[60px] rounded-full' />
      </div>
      <div className='flex items-center space-x-20 bg-white rounded-lg w-[500px] mb-[30px] text-black'>
        <p className='border-2 border-gray-300 rounded-full w-11 p-[10px] m-[20px] text-center'>5</p>
        <div>
            <p className=''>Leo</p>
            <p className='text-gray-400 text-[18px]'>150 Points</p>
        </div>
        <img src={img1} alt="" className='h-[60px] w-[60px] rounded-full' />
      </div>
      <div className='flex items-center space-x-20 bg-white rounded-lg w-[500px] mb-[30px] text-black'>
        <p className='border-2 border-gray-300 rounded-full w-11 p-[10px] m-[20px] text-center'>6</p>
        <div>
            <p className=''>Ashwin</p>
            <p className='text-gray-400 text-[18px]'>140 Points</p>
        </div>
        <img src={img1} alt="" className='h-[60px] w-[60px] rounded-full' />
      </div>
    </div>
    </div>
  )
}

export default Leaderboard
