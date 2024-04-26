import React from 'react'
import Navbar from '../components/Navbar'
import percentage from '../images/Circle - Loader.png'
import clock from '../images/Time Circle.png'
import friends from '../images/Friends_2.png'
import water from '../images/droplevel.png'
import walk from '../images/walklevel.png'
import plants from '../images/plantslevel.png'
import meditate from '../images/meditatelevel.png'

function Dashboard() {
  return (
    <div className='flex flex-col font-secondary items-center bg-blue-50 '>
        <Navbar />
        <div className='pt-[30px]'>
            <p className='text-[22px]'>Hi, Kaushik 👋</p>
            <p className='text-gray-500'>Let’s make habits together!</p>
        </div>
        <div className='flex flex-row items-center my-[20px] bg-gradient-to-r from-[#3843FF] via-blue-60 to-[#5258ca] rounded-lg w-[450px] p-[15px]'>
            <img src={percentage} alt="" className='h-[50px] w-[50px]' />
            <div className='text-white px-[20px]'>
                <p>Your daily goals almost done! 🔥</p>
                <p className='font-extralight'>1 of 4 completed</p>
            </div>
        </div>

        <div className='flex flex-row justify-between items-center w-[450px] space-x-7 my-[10px]'>
          <p className='font-semibold text-[25px]'>Challenges</p>
          <p className='text-[20px] cursor-pointer'>VIEW ALL</p>
        </div>
        <div className='flex flex-row justify-start bg-white p-[15px] w-[450px] rounded-lg'>
            <div className='flex items-center'>
                <img src={clock} alt="" className='h-[35px] w-[35px]' />
            </div>
            <div className='px-[15px] flex flex-col justify-start items-center'>
                <p>Daily Fit Challenge! 🏃🏻‍</p>
                <p className='text-gray-500 font-extralight'>5 days left</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={friends} alt="" className='h-[35px] w-[60px]' />
                <p className='text-gray-500 font-extralight'>4 people joined</p>
            </div>

          </div>
          <div className='flex flex-row justify-between items-center w-[450px] space-x-7 my-[10px]'>
            <p className='font-semibold text-[25px]'>Habits</p>
            <p className='text-[20px] cursor-pointer'>VIEW ALL</p>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] w-[450px] rounded-lg'>
            <img src={water} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col items-center justify-start'>
                <p>Drink Water‍</p>
                <p className='text-gray-500 font-extralight'>500/2000 ML</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[25px] text-center'>+</p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-start bg-white mt-[30px] p-[15px] w-[450px] rounded-lg'>
            <img src={walk} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col items-center '>
                <p>Walk</p>
                <p className='text-gray-500 font-extralight'>5000/10000 STEPS</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[25px] text-center'>+</p>
            </div>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] mt-[30px] w-[450px] rounded-lg'>
            <img src={plants} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col items-center'>
                <p>Water‍ Plants</p>
                <p className='text-gray-500 font-extralight'>0/1 TIMES</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[25px] text-center'>+</p>
            </div>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] mt-[30px] w-[450px] rounded-lg'>
            <img src={meditate} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col items-center'>
                <p>Meditate</p>
                <p className='text-gray-500 font-extralight'>30/30 MIN</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[28px] text-center text-green-500'>✓</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
