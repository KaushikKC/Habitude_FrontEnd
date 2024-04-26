import React from 'react'
import water from '../images/waterdrop.png'
import books from '../images/books.png'
import meditate from '../images/meditate.png'
import exercise from '../images/run.png'
import sleep from '../images/sleep.png'
import food from '../images/food.png'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Profile3() {
  return (
    <div className='bg-blue-50 h-[100vh]'>
       <Navbar />
      <div className='flex flex-col justify-center items-center my-[30px]'>
        <p className='font-secondary font-bold text-[50px]'>Create Account</p>
        <div className='pt-[30px]'>
            <p className='font-semibold font-secondary text-[25px]'>Choose your first Habits</p>
            <p className=' font-secondary text-[20px] text-gray-400'>You may add more habits later</p>
            <div className='grid grid-rows-2 grid-flow-col gap-5 py-[10px]'>
                <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[18px]'>Drink Water</p>
                    <img src={water} alt="" className='h-[42px] w-[42px]' />
                </div>
                <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[18px]'>Read Books</p>
                    <img src={books} alt="" className='h-[42px] w-[42px]' />
                </div>
                <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[18px]'>Meditate</p>
                    <img src={meditate} alt="" className='h-[42px] w-[42px]' />
                </div>
                <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[18px]'>Exercise</p>
                    <img src={exercise} alt="" className='h-[42px] w-[42px]' />
                </div>
                <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[18px]'>Sleep</p>
                    <img src={sleep} alt="" className='h-[42px] w-[42px]' />
                </div>
                <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[18px]'>Diet</p>
                    <img src={food} alt="" className='h-[42px] w-[42px]' />
                </div>
            </div>
        </div>
      <Link to='/explore' className='p-[25px]'>
         <button className='bg-[#3843FF] text-white w-[350px] rounded-3xl p-[10px] hover:font-extrabold'>Proceed</button>
      </Link>
    </div>
    </div>
  )
}

export default Profile3
